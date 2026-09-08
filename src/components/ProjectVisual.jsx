// Abstract, tasteful visual placeholders (no fabricated screenshots).
export function ClaimsVisual() {
  return (
    <svg viewBox="0 0 480 300" className="h-full w-full" role="img" aria-label="Abstract dashboard illustration">
      <defs>
        <linearGradient id="claimsBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#161c26" />
          <stop offset="100%" stopColor="#0a0e14" />
        </linearGradient>
        <linearGradient id="claimsBar" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2dd4bf" />
          <stop offset="100%" stopColor="#14b8a6" />
        </linearGradient>
      </defs>
      <rect width="480" height="300" fill="url(#claimsBg)" />
      <g opacity="0.5">
        <circle cx="420" cy="40" r="90" fill="#2dd4bf" opacity="0.08" />
      </g>
      {/* dashboard frame */}
      <rect x="28" y="28" width="424" height="244" rx="14" fill="#10151d" stroke="#232b38" />
      {/* sidebar */}
      <rect x="28" y="28" width="86" height="244" rx="14" fill="#121821" />
      {[0, 1, 2, 3].map((i) => (
        <rect key={i} x="46" y={64 + i * 36} width="50" height="8" rx="4" fill={i === 0 ? "#2dd4bf" : "#232b38"} />
      ))}
      {/* bars chart */}
      <g>
        {[60, 100, 70, 130, 90, 150].map((h, i) => (
          <rect
            key={i}
            x={140 + i * 40}
            y={230 - h}
            width="22"
            height={h}
            rx="4"
            fill="url(#claimsBar)"
            opacity={0.85}
          />
        ))}
      </g>
      {/* stat pills */}
      <rect x="140" y="52" width="90" height="34" rx="10" fill="#161c26" stroke="#232b38" />
      <rect x="242" y="52" width="90" height="34" rx="10" fill="#161c26" stroke="#232b38" />
      <rect x="344" y="52" width="90" height="34" rx="10" fill="#161c26" stroke="#232b38" />
      {/* map pin */}
      <circle cx="389" cy="200" r="30" fill="none" stroke="#d9a441" strokeWidth="1.5" opacity="0.6" />
      <circle cx="389" cy="200" r="5" fill="#d9a441" />
    </svg>
  );
}

export function MobileAppVisual() {
  return (
    <svg viewBox="0 0 480 300" className="h-full w-full" role="img" aria-label="Abstract mobile app illustration">
      <defs>
        <linearGradient id="mobileBg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#161c26" />
          <stop offset="100%" stopColor="#0a0e14" />
        </linearGradient>
      </defs>
      <rect width="480" height="300" fill="url(#mobileBg)" />
      <circle cx="70" cy="250" r="110" fill="#d9a441" opacity="0.06" />
      {/* phone frame */}
      <rect x="185" y="24" width="140" height="252" rx="22" fill="#10151d" stroke="#232b38" strokeWidth="2" />
      <rect x="197" y="46" width="116" height="150" rx="10" fill="#121821" />
      <rect x="205" y="58" width="60" height="10" rx="5" fill="#2dd4bf" />
      <rect x="205" y="78" width="100" height="8" rx="4" fill="#232b38" />
      <rect x="205" y="94" width="80" height="8" rx="4" fill="#232b38" />
      {/* product cards */}
      <rect x="205" y="112" width="46" height="46" rx="8" fill="#1a3a37" />
      <rect x="259" y="112" width="46" height="46" rx="8" fill="#1a222f" />
      <rect x="205" y="166" width="46" height="22" rx="6" fill="#1a222f" />
      <rect x="259" y="166" width="46" height="22" rx="6" fill="#1a222f" />
      {/* bottom nav */}
      <rect x="197" y="206" width="116" height="34" rx="10" fill="#121821" />
      <circle cx="215" cy="223" r="5" fill="#2dd4bf" />
      <circle cx="255" cy="223" r="5" fill="#232b38" />
      <circle cx="295" cy="223" r="5" fill="#232b38" />
    </svg>
  );
}
