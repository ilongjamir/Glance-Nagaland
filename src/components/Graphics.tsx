export const MannequinDrawing = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 500" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5">
      {/* Background Torso Fill */}
      <path d="M92 65 C70 65 55 75 45 90 V105 C55 125 55 150 55 180 C60 220 65 250 70 290 C85 300 115 300 130 290 C135 250 140 220 145 180 C145 150 145 125 155 105 V90 C145 75 130 65 108 65 Z" fill="currentColor" fillOpacity="0.05" />

      {/* Tripod Base Bottom */}
      <path d="M100 420 C80 430 55 460 45 475" strokeWidth="3" />
      <path d="M100 420 C120 430 145 460 155 475" strokeWidth="3" />
      <path d="M100 420 L100 475" strokeWidth="3" /> 
      <ellipse cx="100" cy="420" rx="12" ry="4" strokeWidth="2" fill="currentColor" />

      {/* Center Pole */}
      <path d="M100 295 L100 420" strokeWidth="4" />
      <path d="M85 350 H115" strokeWidth="2" /> {/* Height adjustment knob */}
      <path d="M115 345 V355" strokeWidth="2" />
      <path d="M95 310 H105" strokeWidth="2" />
      <ellipse cx="100" cy="295" rx="15" ry="4" strokeWidth="2" />

      {/* Finial (Knob at the top) */}
      <path d="M100 30 C105 30 108 40 100 45 C92 40 95 30 100 30 Z" fill="currentColor" />
      <ellipse cx="100" cy="48" rx="12" ry="3" />
      <path d="M92 48 V65" />
      <path d="M108 48 V65" />
      <path d="M92 65 Q100 68 108 65" />

      {/* Shoulders */}
      <path d="M92 65 C70 65 55 75 45 90" />
      <path d="M108 65 C130 65 145 75 155 90" />

      {/* Armhole Caps & Sides */}
      <path d="M45 90 V105 C55 125 55 150 55 180 C60 220 65 250 70 290" />
      <path d="M155 90 V105 C145 125 145 150 145 180 C140 220 135 250 130 290" />
      
      {/* Armhole interior line */}
      <path d="M45 90 C55 90 60 100 55 105" strokeDasharray="2 3" />
      <path d="M155 90 C145 90 140 100 145 105" strokeDasharray="2 3" />

      {/* Bottom Edge */}
      <path d="M70 290 C85 300 115 300 130 290" />
      <path d="M72 280 C85 288 115 288 128 280" opacity="0.5" />

      {/* Seam Lines */}
      <path d="M100 66 V295" strokeDasharray="3 4" opacity="0.6" />
      <path d="M75 100 C70 120 75 180 82 200 C86 240 85 270 82 293" strokeDasharray="3 4" opacity="0.6" />
      <path d="M125 100 C130 120 125 180 118 200 C114 240 115 270 118 293" strokeDasharray="3 4" opacity="0.6" />
      
      {/* Horizontal measurements */}
      <path d="M53 180 C70 190 130 190 147 180" strokeDasharray="3 4" opacity="0.4" />
      <path d="M48 130 C70 145 130 145 152 130" strokeDasharray="3 4" opacity="0.4" />
      <path d="M62 250 C80 260 120 260 138 250" strokeDasharray="3 4" opacity="0.4" />

      {/* Elegant Tape Measure */}
      <path d="M108 65 C125 90 130 130 120 170 C115 190 105 210 100 230 C95 250 85 270 85 295" stroke="#c9a84c" strokeWidth="3" />
      {/* Tape measure detail */}
      <g stroke="#c9a84c" strokeWidth="1">
        <path d="M122 100 L119 101" />
        <path d="M123 110 L120 111" />
        <path d="M123 120 L120 121" />
        <path d="M122 130 L119 131" />
        <path d="M121 140 L118 141" />
        <path d="M119 150 L116 151" />
        <path d="M117 160 L114 161" />
        <path d="M114 170 L111 171" />
        <path d="M110 182 L107 183" />
        <path d="M106 193 L103 194" />
        <path d="M104 204 L101 205" />
        <path d="M102 214 L99 215" />
        <path d="M100 224 L97 225" />
        <path d="M96 238 L93 239" />
        <path d="M94 248 L91 249" />
        <path d="M92 258 L89 259" />
        <path d="M90 268 L87 269" />
        <path d="M88 278 L85 279" />
        <path d="M87 288 L84 289" />
      </g>
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
