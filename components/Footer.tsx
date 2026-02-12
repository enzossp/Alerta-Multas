import React from 'react';
import { RadarIcon } from './RadarIcon';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-slate-200/60">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-1 font-headline">
              <RadarIcon className="w-6 h-6" /><div className="flex items-baseline"><span className="font-black text-lg text-black uppercase">ALERTA</span><span className="font-bold text-lg text-black uppercase">MULTAS</span></div>
            </div>
            <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-3">© 2026 Alerta Multas. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};