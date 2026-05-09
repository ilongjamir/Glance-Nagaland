export const MannequinDrawing = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 400" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <g stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* Stand Base */}
      <path d="M70 380 L130 380 M90 380 L90 350 M110 380 L110 350 M100 350 L100 240" />
      <path d="M70 380 Q100 360 130 380" />
      <path d="M85 365 L115 365" />
      
      {/* Body Core */}
      <path d="M100 60 C80 60 70 80 60 110 C50 140 60 170 70 190 C75 200 85 240 100 240 C115 240 125 200 130 190 C140 170 150 140 140 110 C130 80 120 60 100 60 Z" fill="currentColor" fillOpacity="0.05" />
      
      {/* Neck & Top */}
      <path d="M92 60 L92 40 L108 40 L108 60" />
      <path d="M90 30 L110 30 C110 30 115 20 100 20 C85 20 90 30 90 30 Z" />
      
      {/* Dress form segment lines */}
      <path d="M100 60 L100 240" strokeDasharray="4 6" opacity="0.6" />
      <path d="M62 105 C80 115 120 115 138 105" strokeDasharray="4 6" opacity="0.6" />
      <path d="M57 140 C80 155 120 155 143 140" strokeDasharray="4 6" opacity="0.6" />
      <path d="M65 175 C80 190 120 190 135 175" strokeDasharray="4 6" opacity="0.6" />
      <path d="M76 215 C85 225 115 225 124 215" strokeDasharray="4 6" opacity="0.6" />
      
      {/* Shoulders */}
      <path d="M65 90 C50 90 40 100 35 110" />
      <path d="M135 90 C150 90 160 100 165 110" />
      
      {/* Measurement tape draped over neck */}
      <path d="M108 45 C120 60 130 90 125 120 C120 140 110 160 105 180" stroke="#c9a84c" strokeWidth="4" />
      <path d="M125 120 L120 122 M122 135 L118 136 M118 150 L114 151 M114 165 L110 166" stroke="#c9a84c" strokeWidth="2" />
    </g>
  </svg>
);

export const SewingMachineDrawing = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
      {/* Base */}
      <rect x="20" y="160" width="260" height="25" rx="4" strokeWidth="3" />
      <path d="M30 160 L30 150 L270 150 L270 160" strokeWidth="2" />
      
      {/* Main Body */}
      <path d="M220 150 L220 50 C220 30 200 30 180 30 L80 30 C60 30 50 40 50 60 L50 150" strokeWidth="4" fill="currentColor" fillOpacity="0.05" />
      
      {/* Arm and Needle mechanism */}
      <path d="M60 150 L60 120 M70 150 L70 130" strokeWidth="2" opacity="0.6" />
      <path d="M40 80 L60 80" strokeWidth="2" />
      
      {/* Needle */}
      <path d="M55 120 L55 145" stroke="#c9a84c" strokeWidth="2" />
      
      {/* Handwheel */}
      <circle cx="230" cy="70" r="25" strokeWidth="3" />
      <circle cx="230" cy="70" r="15" strokeWidth="2" color="currentColor" opacity="0.5" />
      <path d="M230 45 L230 95 M205 70 L255 70 M212 52 L248 88 M212 88 L248 52" strokeWidth="1.5" opacity="0.4" />
      
      {/* Thread Spools */}
      <path d="M120 30 L120 10 M110 20 L130 20 M115 10 L125 10" strokeWidth="2" />
      <path d="M160 30 L160 10 M150 15 L170 15 M155 5 L165 5" strokeWidth="2" />
      
      {/* Thread path */}
      <path d="M120 10 Q100 -5 70 30 Q50 60 55 120" stroke="#c9a84c" strokeWidth="1" strokeDasharray="2 2" />
      
      {/* Dial */}
      <circle cx="150" cy="90" r="10" strokeWidth="2" />
      <circle cx="150" cy="90" r="4" strokeWidth="1" fill="currentColor" />
      
      <circle cx="100" cy="110" r="6" strokeWidth="2" />
    </g>
  </svg>
);

export const ShearsDrawing = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <g stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      {/* Blades */}
      <path d="M80 80 L180 20 L175 40 L85 85" fill="currentColor" fillOpacity="0.1" />
      <path d="M75 90 L185 100 L180 115 L85 100" fill="currentColor" fillOpacity="0.1" />
      
      {/* Pivot */}
      <circle cx="85" cy="90" r="4" fill="#c9a84c" stroke="none" />
      
      {/* Handles */}
      <ellipse cx="45" cy="55" rx="30" ry="20" transform="rotate(-30 45 55)" />
      <ellipse cx="40" cy="125" rx="35" ry="25" transform="rotate(20 40 125)" />
      
      <path d="M80 80 C60 70 50 40 45 55" />
      <path d="M75 90 C50 100 40 140 40 125" />
      
      {/* Needle & Thread decoration */}
      <path d="M20 170 Q40 120 110 160 Q170 190 190 150" stroke="#c9a84c" strokeWidth="2" strokeDasharray="4 4" />
      <path d="M185 155 L195 145" stroke="#c9a84c" strokeWidth="3" />
    </g>
  </svg>
);
