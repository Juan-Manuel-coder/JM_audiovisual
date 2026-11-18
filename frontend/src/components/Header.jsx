import { ShoppingCart, Search, Menu, Camera, Mic, Lightbulb, SlidersHorizontal } from 'lucide-react';

function Header() {
  return (
    <header className="relative bg-[#0a1128] border-b-4 border-cyan-400 shadow-[0_0_40px_rgba(6,182,212,0.5)]">
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-cyan-300 to-transparent opacity-90"></div>
      
      <div className="w-full px-6 py-4 flex items-center justify-between">
        
        {/* Logo compuesto */}
        <div className="flex items-center gap-4 group cursor-pointer flex-shrink-0">
          <div className="relative w-24 h-24">
            {/* Círculo más grande con borde grueso y brillante */}
            <div className="relative w-24 h-24 rounded-full bg-[#0a1128] border-4 border-cyan-400 ring-2 ring-cyan-400/50 ring-offset-2 ring-offset-[#0a1128] flex items-center justify-center shadow-[0_0_25px_rgba(6,182,212,0.9)] group-hover:shadow-[0_0_40px_rgba(6,182,212,1)] transition-shadow duration-300 overflow-hidden">
              
              {/* Iconos dentro del círculo con bordes y colores vibrantes */}
              <Camera className="w-9 h-9 text-cyan-300 absolute top-1 left-1 rotate-[-25deg] stroke-[2.5] drop-shadow-[0_0_3px_rgba(255,255,255,0.8)]" />
              <Mic className="w-9 h-9 text-emerald-300 absolute bottom-1 right-1 rotate-[20deg] stroke-[2.5] drop-shadow-[0_0_3px_rgba(255,255,255,0.8)]" />
              <Lightbulb className="w-9 h-9 text-yellow-300 absolute top-1 right-1 rotate-[45deg] stroke-[2.5] drop-shadow-[0_0_3px_rgba(255,255,255,0.8)]" />
              <SlidersHorizontal className="w-9 h-9 text-purple-300 absolute bottom-1 left-1 rotate-[-15deg] stroke-[2.5] drop-shadow-[0_0_3px_rgba(255,255,255,0.8)]" />

              {/* JM en blanco/amarillo para máximo contraste */}
              <span className="relative z-20 text-4xl font-extrabold text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]" style={{ fontFamily: 'Orbitron, sans-serif' }}>
                JM
              </span>
            </div>
          </div>
          
          {/* Marca estirada */}
          <span 
            className="text-4xl font-extrabold tracking-[0.15em] text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-emerald-300 to-cyan-300 drop-shadow-[0_0_15px_rgba(6,182,212,0.6)] whitespace-nowrap"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            JM AUDIOVISUAL
          </span>
        </div>

        {/* Navegación centrada */}
        <nav className="hidden lg:flex items-center gap-12 absolute left-1/2 transform -translate-x-1/2">
          {['Inicio', 'Catálogo', 'Categorías', 'Contacto'].map((item) => (
            <a
              key={item}
              href="#"
              className="relative text-xl font-semibold text-gray-200 hover:text-white transition-colors duration-300 group"
              style={{ fontFamily: 'Rajdhani, sans-serif' }}
            >
              {item}
              <span className="absolute -bottom-2 left-0 w-0 h-[3px] bg-gradient-to-r from-cyan-300 to-emerald-300 group-hover:w-full transition-all duration-300 shadow-[0_0_15px_rgba(6,182,212,1)]"></span>
            </a>
          ))}
        </nav>

        {/* Iconos estirados */}
        <div className="flex items-center gap-10 flex-shrink-0">
          <button className="relative text-gray-200 hover:text-cyan-300 transition-all duration-300 group p-2">
            <Search className="w-8 h-8 group-hover:drop-shadow-[0_0_15px_rgba(6,182,212,1)] stroke-[2.5]" />
          </button>
          <button className="relative text-gray-200 hover:text-emerald-300 transition-all duration-300 group p-2">
            <ShoppingCart className="w-8 h-8 group-hover:drop-shadow-[0_0_15px_rgba(16,185,129,1)] stroke-[2.5]" />
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-emerald-400 rounded-full text-[11px] font-bold text-[#0a1128] flex items-center justify-center animate-pulse">
              0
            </span>
          </button>
          <button className="lg:hidden text-gray-200 hover:text-cyan-300 transition-all duration-300 p-2">
            <Menu className="w-8 h-8 stroke-[2.5]" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;