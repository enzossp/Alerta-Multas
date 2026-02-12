import React from 'react';
import { RadarIcon } from './RadarIcon';

export const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 py-4">
      <div className="container mx-auto px-4 flex justify-center items-center">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 font-headline">
            <RadarIcon className="w-8 h-8" />
            <div className="flex items-baseline">
              <span className="font-black text-xl tracking-tight text-black uppercase">ALERTA</span>
              <span className="font-bold text-xl tracking-tight text-black uppercase">MULTAS</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};