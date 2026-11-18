import { ShoppingCart } from 'lucide-react';
import { Button } from './ui/button';

function ProductCard({ nombre, descripcion, precio, imagen, categoria }) {
  return (
    <div className="group relative bg-[#0f1a3a] rounded-2xl overflow-hidden border border-cyan-500/50 ring-1 ring-cyan-400/30 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:ring-cyan-400/80 hover:shadow-[0_0_35px_rgba(6,182,212,0.7)] hover:-translate-y-2 transition-all duration-300 flex flex-col">
      
      {/* Imagen del producto */}
      <div className="relative h-52 overflow-hidden bg-slate-900">
        <img
          src={imagen}
          alt={nombre}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <span className="absolute top-4 left-4 bg-cyan-500/90 text-[#0a1128] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
          {categoria}
        </span>
      </div>

      {/* Información del producto */}
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-white mb-2 line-clamp-1" style={{ fontFamily: 'Rajdhani, sans-serif' }}>
          {nombre}
        </h3>
        <p className="text-sm text-cyan-100/70 mb-3 line-clamp-2 flex-grow">
          {descripcion}
        </p>
        
        <div className="flex items-center justify-between mt-auto">
          <span className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
            S/ {Number(precio).toFixed(2)}
          </span>
          <Button className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110">
            <ShoppingCart className="w-5 h-5 text-[#0a1128]" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;