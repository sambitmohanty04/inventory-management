import { useMemo } from "react";
import LoginForm from "../pages/LoginForm";

interface Triangle {
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
  rotate: number;
}

interface Particle {
  left: number;
  top: number;
  size: number;
  delay: number;
  duration: number;
}

export default function Login() {
  // Floating Triangles
  const triangles = useMemo<Triangle[]>(
    () =>
      Array.from({ length: 20 }, (_, index) => ({
        // First 10 => Left Side
        // Next 10 => Right Side
        left:
          index < 10
            ? Math.random() * 25
            : 75 + Math.random() * 25,

        top: Math.random() * 100,
        size: 30 + Math.random() * 60,
        delay: Math.random() * 5,
        duration: 10 + Math.random() * 8,
        rotate: Math.random() * 360,
      })),
    []
  );

  // Floating Particles
  const particles = useMemo<Particle[]>(
    () =>
      Array.from({ length: 50 }, () => ({
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 2 + Math.random() * 5,
        delay: Math.random() * 5,
        duration: 8 + Math.random() * 10,
      })),
    []
  );

  return (
    <div className="relative min-h-screen overflow-hidden animated-background">

      {/* Animated Grid */}
      <div className="absolute inset-0 animated-grid" />

      {/* Glow Background */}
      <div className="absolute inset-0 glow-background" />

      {/* Floating Triangles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {triangles.map((triangle, index) => (
          <span
            key={index}
            className="triangle-shape absolute"
            style={{
              left: `${triangle.left}%`,
              top: `${triangle.top}%`,
              width: `${triangle.size}px`,
              height: `${triangle.size}px`,
              animationName:
                index % 2 === 0
                  ? "triangleFloat"
                  : "triangleFloatReverse",
              animationDuration: `${triangle.duration}s`,
              animationDelay: `${triangle.delay}s`,
              transform: `rotate(${triangle.rotate}deg)`,
            }}
          />
        ))}

      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {particles.map((particle, index) => (
          <span
            key={index}
            className="particle"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}

      </div>

      {/* Main Content */}
      <div className="relative z-10 grid min-h-screen lg:grid-cols-2">

        {/* Left Section */}
        <div className="flex flex-col items-center justify-center border-r border-white/10 px-10 text-center">

          <span className="rounded-full border border-white/20 bg-white/10 px-6 py-2 text-sm font-medium text-white backdrop-blur-xl">
            Inventory Management System
          </span>

          <h1 className="mt-8 text-6xl font-extrabold text-white leading-tight">
            Inventory
            <br />
            <span className="bg-gradient-to-r from-pink-300 via-violet-300 to-cyan-300 bg-clip-text text-transparent">
              Management
            </span>
          </h1>

          <p className="mt-8 max-w-md text-lg leading-8 text-white/75">
            Manage inventory smarter with a modern, secure and scalable
            management platform built for your business.
          </p>

        </div>

        {/* Right Section */}
        <div className="flex items-center justify-center px-6">

          <LoginForm />

        </div>

      </div>

    </div>
  );
}