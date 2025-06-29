// src/components/icons/LinkedInIcon.tsx
import React from 'react';

export default function LinkedInIcon({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.447 20.452H17.21V14.81c0-1.345-.024-3.078-1.878-3.078-1.88 0-2.168 1.466-2.168 2.978v5.742h-3.238V9h3.109v1.561h.045c.433-.82 1.494-1.683 3.073-1.683 3.289 0 3.894 2.164 3.894 4.977v6.597zM5.337 7.433c-1.04 0-1.882-.843-1.882-1.882 0-1.04.842-1.882 1.882-1.882s1.882.842 1.882 1.882c0 1.039-.842 1.882-1.882 1.882zM6.894 20.452H3.781V9h3.113v11.452zM22.225 0H1.771C.792 0 0 .771 0 1.723v20.554C0 23.23.792 24 1.771 24h20.451C23.2 24 24 23.23 24 22.277V1.723C24 .771 23.2 0 22.225 0z" />
    </svg>
  );
}