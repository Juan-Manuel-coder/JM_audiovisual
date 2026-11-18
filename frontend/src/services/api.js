const API_URL = 'http://127.0.0.1:8000/api';

export const getProductos = async () => {
  const response = await fetch(`${API_URL}/productos/`);
  if (!response.ok) throw new Error('Error al cargar productos');
  return await response.json();
};

export const getCategorias = async () => {
  const response = await fetch(`${API_URL}/categorias/`);
  if (!response.ok) throw new Error('Error al cargar categorías');
  return await response.json();
};