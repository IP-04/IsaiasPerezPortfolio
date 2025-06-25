import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
}

export default function ParticleBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const createParticles = () => {
      const newParticles: Particle[] = [];
      for (let i = 0; i < 50; i++) {
        newParticles.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.5 + 0.1,
          speed: Math.random() * 2 + 0.5,
        });
      }
      setParticles(newParticles);
    };

    createParticles();
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-purple-400"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
          }}
          animate={{
            x: [0, 20, -20, 0],
            y: [0, -30, 30, 0],
            opacity: [particle.opacity, particle.opacity * 0.3, particle.opacity],
          }}
          transition={{
            duration: particle.speed * 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
      
      {/* Connecting lines between particles */}
      <svg className="absolute inset-0 w-full h-full">
        {particles.slice(0, 20).map((particle, index) => {
          const nextParticle = particles[(index + 1) % 20];
          return (
            <motion.line
              key={`line-${index}`}
              x1={`${particle.x}%`}
              y1={`${particle.y}%`}
              x2={`${nextParticle?.x}%`}
              y2={`${nextParticle?.y}%`}
              stroke="rgba(157, 78, 221, 0.1)"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
                delay: index * 0.1,
              }}
            />
          );
        })}
      </svg>
    </div>
  );
}