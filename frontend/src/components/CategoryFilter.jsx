function CategoryFilter({ categoriaActiva, setCategoriaActiva, categorias }) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {categorias.map((categoria) => (
        <button
          key={categoria}
          onClick={() => setCategoriaActiva(categoria)}
          className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
            categoriaActiva === categoria
              ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-white border-transparent'
              : 'bg-transparent text-cyan-300 border-cyan-500/50 hover:border-cyan-400 hover:text-white'
          }`}
        >
          {categoria}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;