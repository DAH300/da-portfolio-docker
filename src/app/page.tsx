'use client';

import projects from '@/data/projects';
import socials from '@/data/socials';
import experience from '@/data/experience';
import ProjectCard from '@/components/ProjectCard';
import WorkEntry from '@/components/WorkEntry';
import SocialLink from '@/components/SocialLink';
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
  const showHero = true;


  // Section alignment logic AFTER scroll
  // Before scroll: always centered
  // After scroll:
  //   ≤1280: centered
  //   1281–1536: right aligned
  //   >1536: centered
  let sectionAlignmentClass = 'mx-auto';

  if (scrolled) {
    if (windowWidth > 1280 && windowWidth <= 1536) {
      sectionAlignmentClass = 'ml-auto mr-0 pr-16'; // right aligned with padding-right
    } else {
      sectionAlignmentClass = 'mx-auto';
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

      {/* Large Screen Hero */}
      {showHero && (
        <section
          className={`relative z-10 flex h-screen w-full flex-col items-center justify-center text-center px-4 ${windowWidth > 1280 ? 'block' : 'hidden'
            }`}
        >
          <div
            className={`transition-all duration-2000 ease-in-out fixed ${scrolled
              ? 'top-1/4 left-5 -translate-x-20 scale-50 text-left'
              : 'top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-100 text-center'
              }`}
          >
            <h1
              className={`text-4xl sm:text-7xl font-bold ${scrolled ? 'text-left' : 'text-center'
                }`}
            >
              Dwayne Howell
            </h1>
            <p className="mt-2 text-xl sm:text-3xl font-light text-[#cfa5afcc] text-center">
              Backend, Embedded, <br />
              & Full-Stack Developer
            </p>
          </div>

          <div className="absolute bottom-10 animate-bounce text-sm text-[#cfa5af66]">
            scroll ↓
          </div>
        </section>
      )}

      {/* Small Screen Hero */}
      {showHero && (
        <section
          className={`relative z-10 flex flex-col items-center justify-center text-center px-4 py-20 ${windowWidth <= 1280 ? 'block' : 'hidden'
            }`}
        >
          <div
            className={`relative p-4 text-center scale-100 top-auto left-auto translate-x-0 translate-y-0`}
          >
            <h1 className="text-4xl sm:text-7xl font-bold text-center">
              Dwayne Howell
            </h1>
            <p className="mt-2 text-xl sm:text-3xl font-light text-[#cfa5afcc] text-center">
              Backend, Embedded, <br />
              & Full-Stack Developer
            </p>
          </div>
        </section>
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
          {projects.map((project) => (
            <ProjectCard
              key={project.href}
              href={project.href}
              title={project.title}
              description={project.description}
              tags={project.tags}
            />
          ))}
        </div>
      </section>

      {/* Work Experience Section */}
      <section
        id="experience"
        className={`relative z-10 px-6 py-20 max-w-4xl ${sectionAlignmentClass}`}
      >
        <h2 className={`text-3xl font-semibold mb-8 border-b border-[#cfa5af33] pb-2 text-left`}
        >
          Work Experience
        </h2>
        <div className="space-y-10">
          {experience.map((job, i) => (
            <WorkEntry
              key={i}
              title={job.title}
              dateRange={job.dateRange}
              bullets={job.bullets}
            />
          ))}
        </div>
      </section>

      {/* Social Links */}
      {windowWidth > 1280 && (
        <div
          className={`fixed top-[66vh] left-[8rem] z-50 flex flex-col items-start space-y-4 transition-all duration-2000 ease-out ${scrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-90 pointer-events-none'
            }`}
        >
          {socials.map((social) => (
            <SocialLink key={social.name} {...social} />
          ))}
        </div>
      )}

      {windowWidth < 1280 && (
        <div
          className="flex justify-center items-center gap-12 py-10 transition-all duration-1000 ease-in-out animate-slide-up"
          style={{ animation: 'slide-up 1s ease-out forwards' }}
        >
          {socials.map((social) => (
            <SocialLink key={social.name} {...social} />
          ))}
        </div>
      )}
    </main>
  );
}
