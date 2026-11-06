export function PixelHammer({ className = "w-9 h-9" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`inline-block transition-transform duration-300 hover:rotate-12 hover:scale-110 text-zinc-100 ${className}`}
      shapeRendering="crispEdges"
      aria-hidden="true"
    >
      {/* Pixel Art Hammer head & claw */}
      <rect x="13" y="2" width="2" height="2" fill="#d4d4d8" />
      <rect x="15" y="2" width="2" height="2" fill="#ffffff" />
      <rect x="17" y="2" width="2" height="2" fill="#ffffff" />
      <rect x="19" y="3" width="2" height="2" fill="#e4e4e7" />
      <rect x="20" y="5" width="2" height="2" fill="#a1a1aa" />
      
      <rect x="12" y="4" width="2" height="2" fill="#ffffff" />
      <rect x="14" y="4" width="2" height="2" fill="#ffffff" />
      <rect x="16" y="4" width="2" height="2" fill="#a1a1aa" />
      <rect x="18" y="5" width="2" height="2" fill="#71717a" />
      
      <rect x="10" y="5" width="2" height="2" fill="#d4d4d8" />
      <rect x="12" y="6" width="2" height="2" fill="#ffffff" />
      <rect x="14" y="6" width="2" height="2" fill="#a1a1aa" />
      
      <rect x="11" y="8" width="2" height="2" fill="#ffffff" />
      <rect x="13" y="8" width="2" height="2" fill="#71717a" />

      {/* Shaft / Handle (Pixelated) */}
      <rect x="10" y="9" width="2" height="2" fill="#9ca3af" />
      <rect x="9" y="10" width="2" height="2" fill="#d4d4d8" />
      <rect x="8" y="11" width="2" height="2" fill="#e4e4e7" />
      <rect x="7" y="12" width="2" height="2" fill="#a1a1aa" />
      <rect x="6" y="13" width="2" height="2" fill="#d4d4d8" />
      <rect x="5" y="14" width="2" height="2" fill="#e4e4e7" />
      <rect x="4" y="15" width="2" height="2" fill="#a1a1aa" />
      <rect x="3" y="16" width="2" height="2" fill="#d4d4d8" />
      <rect x="2" y="17" width="2" height="2" fill="#71717a" />
      <rect x="1" y="18" width="2" height="2" fill="#52525b" />
    </svg>
  );
}
