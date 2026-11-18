import { useState, useEffect } from 'react';
import Header from './components/Header';
import CategoryFilter from './components/CategoryFilter';
import ProductList from './components/ProductList';
import { getProductos, getCategorias } from './services/api';
import '@fontsource/orbitron/700.css';
import '@fontsource/rajdhani/500.css';
import '@fontsource/rajdhani/600.css';

function App() {
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [categoriaActiva, setCategoriaActiva] = useState('Todas');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        setLoading(true);
        const dataProductos = await getProductos();
        const dataCategorias = await getCategorias();
        
        setProductos(dataProductos);
        setCategorias(['Todas', ...dataCategorias.map(c => c.nombre)]);
        setError(null);
      } catch (err) {
        setError('Ocurrió un error al cargar los datos. Verifica que el backend esté corriendo.');
      } finally {
        setLoading(false);
      }
    };
    cargarDatos();
  }, []);

  const productosFiltrados = categoriaActiva === 'Todas' 
    ? productos 
    : productos.filter((p) => p.categoria_nombre === categoriaActiva);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0a1128] via-[#0f1a3a] to-[#0a1128]">
      <Header />
      <main className="w-full px-8 py-16">
        <div className="text-center mb-12">
          <h1 
            className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 drop-shadow-[0_0_25px_rgba(6,182,212,0.5)] mb-6"
            style={{ fontFamily: 'Orbitron, sans-serif' }}
          >
            BIENVENIDO A JM AUDIOVISUAL
          </h1>
          <p 
            className="text-xl text-cyan-100/70 max-w-3xl mx-auto"
            style={{ fontFamily: 'Rajdhani, sans-serif' }}
          >
            Encuentra los mejores equipos audiovisuales para tus proyectos. Cámaras, micrófonos, iluminación y más.
          </p>
        </div>
        
        {loading && (
          <div className="text-center text-cyan-400 text-2xl py-10">
            Cargando productos...
          </div>
        )}

        {error && (
          <div className="text-center text-red-400 text-xl py-10">
            {error}
          </div>
        )}

        {!loading && !error && (
          <>
            <CategoryFilter 
              categoriaActiva={categoriaActiva} 
              setCategoriaActiva={setCategoriaActiva} 
              categorias={categorias}
            />
            <ProductList productos={productosFiltrados} />
          </>
        )}
      </main>
    </div>
  );
}

export default App;