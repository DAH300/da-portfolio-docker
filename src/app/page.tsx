'use client';

import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const glowRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1600
  );

  useEffect(() => {
    const moveGlow = (e: MouseEvent) => {
      if (glowRef.current) {
        glowRef.current.style.left = `${e.clientX - 150}px`;
        glowRef.current.style.top = `${e.clientY - 150}px`;
      }
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('mousemove', moveGlow);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', moveGlow);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    handleResize(); // initial check
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Hero visible if NOT scrolled OR (scrolled AND wide screen)
  const showHero = !scrolled || (scrolled && windowWidth > 1280);

  // Section alignment logic AFTER scroll
  // Before scroll: always centered
  // After scroll:
  //   ≤1280: centered
  //   1281–1536: right aligned
  //   >1536: centered
  let sectionAlignmentClass = 'mx-auto';
  let headingAlignmentClass = 'text-center';

  if (scrolled) {
    if (windowWidth > 1280 && windowWidth <= 1536) {
      sectionAlignmentClass = 'ml-auto mr-0 pr-16'; // right aligned with padding-right
      headingAlignmentClass = 'text-right';
    } else {
      sectionAlignmentClass = 'mx-auto';
      headingAlignmentClass = 'text-center';
    }
  }

  return (
    <main className="relative w-screen bg-[#3C0D1F] text-[#CFA5AF] scroll-smooth overflow-x-hidden">
      {/* Glow */}
      <div
        ref={glowRef}
        className="pointer-events-none fixed h-[300px] w-[300px] rounded-full bg-[#66023c] blur-[100px] mix-blend-lighten z-0"
      />

      {/* Hero Section */}
      {showHero && (
        <section className="relative z-10 flex h-screen w-full flex-col items-center justify-center text-center px-4">
          <div
            className={`transition-all duration-2000 ease-in-out fixed ${scrolled
                ? 'top-1/4 left-4 scale-50 text-left'
                : 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-100 text-center'
              }`}
          >
            <h1
              className={`text-4xl sm:text-6xl font-bold ${scrolled ? 'text-left' : 'text-center'
                }`}
            >
              Dwayne Howell
            </h1>
            <p className="mt-2 text-xl sm:text-2xl font-light text-[#cfa5afcc] text-center">
              Backend, Embedded, <br />
              & Full-Stack Developer
            </p>
          </div>

          <div className="absolute bottom-10 animate-bounce text-sm text-[#cfa5af66]">
            scroll ↓
          </div>
        </section>
      )}

      {/* Spacer div to avoid clipping when hero shrinks */}
      {showHero && (
        <div className={`transition-all duration-500 ${scrolled ? 'h-[100px]' : 'h-0'}`} />
      )}

      {/* Projects Section */}
      <section
        id="projects"
        className={`relative z-10 px-6 py-20 max-w-4xl ${sectionAlignmentClass} pt-[180px] sm:pt-[160px]`}
      >
        <h2
          className={`text-3xl font-semibold mb-8 border-b border-[#cfa5af33] pb-2 text-left`}
        >
          Projects
        </h2>
        <div className="space-y-6">
          {/* Project 1 */}
          <a
            href="https://github.com/DAH300/da-portfolio-docker"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg border border-transparent hover:border-[#cfa5af55] hover:bg-[#cfa5af0a] transition-all duration-200 p-4"
          >
            <h3 className="text-xl font-medium text-[#CFA5AF]">Portfolio Site (This!)</h3>
            <p className="text-[#cfa5af99] mt-1">
              Full-stack personal site built with Next.js 15, Tailwind CSS, and Docker for consistent development. Features live reloading.
            </p>
          </a>

          {/* Project 2 */}
          <a
            href="https://github.com/DAH300"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg border border-transparent hover:border-[#cfa5af55] hover:bg-[#cfa5af0a] transition-all duration-200 p-4"
          >
            <h3 className="text-xl font-medium text-[#CFA5AF]">Embedded Temp Monitor (PIC)</h3>
            <p className="text-[#cfa5af99] mt-1">
              Reads DS18B20 sensor via 1-Wire and displays real-time temperature using an I2C LCD on a PIC16F877A. Timers, interrupts, and bit-banging used extensively.
            </p>
          </a>

          {/* Project 3 */}
          <a
            href="https://github.com/DAH300/Bills_App"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-lg border border-transparent hover:border-[#cfa5af55] hover:bg-[#cfa5af0a] transition-all duration-200 p-4"
          >
            <h3 className="text-xl font-medium text-[#CFA5AF]">Self-Updating Python App</h3>
            <p className="text-[#cfa5af99] mt-1">
              A Python application packaged as a `.exe` that checks GitHub for updates and relaunches itself when a new version is available. Built with PyInstaller and GitHub Releases API.
            </p>
          </a>
        </div>
      </section>

      {/* Work Experience Section */}
      <section
        id="experience"
        className={`relative z-10 px-6 py-20 max-w-4xl ${sectionAlignmentClass}`}
      >
        <h2
          className={`text-3xl font-semibold mb-8 border-b border-[#cfa5af33] pb-2 text-left`}
        >
          Work Experience
        </h2>
        <div className="space-y-10">
          <div>
            <h3 className="text-xl font-medium">Self-Directed Projects (2024–Now)</h3>
            <p className="text-[#cfa5af99]">
              <strong>Full-Stack</strong> – Designed and deployed this portfolio site with Docker and Next.js, and developed a self-updating Python desktop app using GitHub integration and packaging tools.
              <br />
              <strong>Embedded</strong> – Built microcontroller projects with PIC, working with timers, I2C, UART, and temperature sensors. Independently developed understanding of datasheets and low-level registers.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium">Group Project Lead – CS Degree</h3>
            <p className="text-[#cfa5af99]">
              Consistently led academic dev teams, taking initiative in backend structure, API planning, and ensuring teammates stayed on track through clear documentation and collaboration.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-medium">Service & Retail Management (2005–2024)</h3>
            <p className="text-[#cfa5af99]">
              Led teams of up to 60 people across fast food and retail (Panera, Chick-fil-A, Sears, VA Hospital). Oversaw scheduling, hiring, training, POS systems, and customer service.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
