import React from 'react';

const IconTableau = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    viewBox="0 0 64 64"
    fill="none"
    className="feather feather-tableau">
    <title>Tableau</title>
    <g stroke="currentColor" strokeWidth="4" strokeLinecap="round">
      {/* Center cross */}
      <line x1="32" y1="20" x2="32" y2="44" />
      <line x1="20" y1="32" x2="44" y2="32" />

      {/* Surrounding smaller crosses */}
      <line x1="48" y1="10" x2="48" y2="18" />
      <line x1="44" y1="14" x2="52" y2="14" />

      <line x1="16" y1="10" x2="16" y2="18" />
      <line x1="12" y1="14" x2="20" y2="14" />

      <line x1="10" y1="32" x2="18" y2="32" />
      <line x1="14" y1="28" x2="14" y2="36" />

      <line x1="48" y1="32" x2="56" y2="32" />
      <line x1="52" y1="28" x2="52" y2="36" />

      <line x1="16" y1="46" x2="16" y2="54" />
      <line x1="12" y1="50" x2="20" y2="50" />

      <line x1="48" y1="46" x2="48" y2="54" />
      <line x1="44" y1="50" x2="52" y2="50" />

      <line x1="32" y1="52" x2="32" y2="60" />
      <line x1="28" y1="56" x2="36" y2="56" />

      <line x1="32" y1="4" x2="32" y2="12" />
      <line x1="28" y1="8" x2="36" y2="8" />
    </g>
  </svg>
);

export default IconTableau;
