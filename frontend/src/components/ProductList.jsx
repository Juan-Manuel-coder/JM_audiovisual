import ProductCard from './ProductCard';

function ProductList({ productos }) {
  if (productos.length === 0) {
    return (
      <div className="text-center text-cyan-300 text-xl py-10">
        No hay productos disponibles en esta categoría.
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {productos.map((producto) => (
        <ProductCard 
          key={producto.id}
          nombre={producto.nombre}
          descripcion={producto.descripcion}
          precio={producto.precio}
          imagen={producto.imagen}
          categoria={producto.categoria_nombre} 
        />
      ))}
    </div>
  );
}

export default ProductList;