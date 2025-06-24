'use client';

import { useEffect, useRef } from 'react';

export default function Home() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveGlow = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX - 150}px`;
        glowRef.current.style.top = `${e.clientY - 150}px`;
      }
    };

    window.addEventListener('mousemove', moveGlow);
    return () => window.removeEventListener('mousemove', moveGlow);
  }, []);

  return (
    <main className="relative w-screen bg-[#3C0D1F] text-[#CFA5AF] scroll-smooth">
      {/* Glow */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed h-[300px] w-[300px] rounded-full bg-[#CFA5AF33] blur-[100px] mix-blend-lighten z-0"
      />

      {/* Hero Section */}
      <section className="relative z-10 flex h-screen w-full flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl sm:text-6xl font-bold">Dwayne Howell</h1>
        <p className="mt-4 text-xl sm:text-2xl font-light text-[#cfa5afcc]">
          Backend, Embedded & Full-Stack Developer
        </p>
        <p className="mt-2 max-w-xl text-base text-[#cfa5af88]">
          Building systems from silicon to server — performance-focused, real-world ready.
        </p>
        <div className="absolute bottom-10 animate-bounce text-sm text-[#cfa5af66]">
          scroll ↓
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="relative z-10 px-6 py-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 border-b border-[#cfa5af33] pb-2">
          Projects
        </h2>
        <div className="space-y-10">
          <div>
            <h3 className="text-xl font-medium">Self-Updating Python App</h3>
            <p className="text-[#cfa5af99]">
              A Python application packaged as a `.exe` that checks GitHub for updates and relaunches itself when a new version is available. Built with PyInstaller and GitHub Releases API.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium">Embedded Temp Monitor (PIC)</h3>
            <p className="text-[#cfa5af99]">
              Reads DS18B20 sensor via 1-Wire and displays real-time temperature using an I2C LCD on a PIC16F877A. Timers, interrupts, and bit-banging used extensively.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium">Portfolio Site (This!)</h3>
            <p className="text-[#cfa5af99]">
              Full-stack personal site built with Next.js 15, Tailwind CSS, and Docker for consistent development. Features live reloading and plans for future CMS integration.
            </p>
          </div>
        </div>
      </section>

      {/* Work Experience Section */}
      <section id="experience" className="relative z-10 px-6 py-20 max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-8 border-b border-[#cfa5af33] pb-2">
          Work Experience
        </h2>
        <div className="space-y-10">
          <div>
            <h3 className="text-xl font-medium">Service & Retail Management (2005–2024)</h3>
            <p className="text-[#cfa5af99]">
              Led teams of up to 60 people across fast food and retail (Panera, Chick-fil-A, Sears, VA Hospital). Oversaw scheduling, hiring, training, POS systems, and customer service.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium">Group Project Lead – CS Degree</h3>
            <p className="text-[#cfa5af99]">
              Consistently led academic dev teams, taking initiative in backend structure, API planning, and ensuring teammates stayed on track through clear documentation and collaboration.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium">Self-Directed Embedded Projects (2024–Now)</h3>
            <p className="text-[#cfa5af99]">
              Built microcontroller projects with PIC, working with timers, I2C, UART, and temperature sensors. Independently developed understanding of datasheets and low-level registers.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
