import React from 'react';

export const RadarIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => {
  return (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      {/* Corpo da Câmera */}
      <rect x="18" y="15" width="48" height="52" rx="6" fill="#B9E2FF" stroke="black" strokeWidth="4" />
      
      {/* Topo Azul Escuro */}
      <path d="M18 21C18 17.6863 20.6863 15 24 15H60C63.3137 15 66 17.6863 66 21V28H18V21Z" fill="#0062CC" stroke="black" strokeWidth="4" />
      
      {/* Suporte Inferior */}
      <rect x="38" y="67" width="8" height="15" fill="black" />
      
      {/* Lente Principal */}
      <circle cx="42" cy="46" r="14" fill="#0062CC" stroke="black" strokeWidth="3" />
      <circle cx="37" cy="41" r="3" fill="white" />
      
      {/* Sensor Pequeno */}
      <circle cx="27" cy="34" r="3" fill="black" />
      
      {/* Mostrador de Velocidade (Speedometer) */}
      <circle cx="72" cy="65" r="20" fill="white" stroke="black" strokeWidth="5" />
      <path d="M72 65L82 55" stroke="black" strokeWidth="4" strokeLinecap="round" />
      <circle cx="72" cy="65" r="3" fill="black" />
      
      {/* Detalhe do Mostrador */}
      <path d="M60 55C63 51 68 49 72 49" stroke="black" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
};