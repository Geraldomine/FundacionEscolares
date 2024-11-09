import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { BlogPost } from '../types';
import { Plus, Search, Filter } from 'lucide-react';
import { agriculturalActivities } from '../data/activities';

const provinces = ['Santa Fe', 'Misiones', 'Buenos Aires', 'Corrientes', 'Mendoza'];
const schools = [
  'Escuela Agrotécnica N°1 - Santa Fe',
  'Instituto Agrario N°23 - Misiones',
  'Escuela Rural N°5 - Buenos Aires',
  'Escuela Técnica N°7 - Corrientes',
  'Instituto Agrícola N°12 - Mendoza'
];

const mockPosts: BlogPost[] = [
  {
    id: 1,
    title: "Análisis de Costos: Producción Bovina 2024",
    content: "Estudio detallado de los costos operativos en la producción de ganado bovino, incluyendo alimentación, sanidad y mano de obra...",
    author: "Ing. María González",
    date: "2024-03-15",
    province: "Santa Fe",
    school: "Escuela Agrotécnica N°1 - Santa Fe",
    activityType: "bovinos",
    image: "https://images.unsplash.com/photo-1596733430284-f7437764b1a9?auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    title: "Rendimiento del Cultivo de Trigo: Campaña 2023",
    content: "Resultados y análisis de la última campaña de trigo, con datos de productividad y recomendaciones técnicas...",
    author: "Ing. Carlos Rodríguez",
    date: "2024-03-10",
    province: "Buenos Aires",
    school: "Escuela Rural N°5 - Buenos Aires",
    activityType: "granos",
    image: "https://images.unsplash.com/photo-1535241749838-299277b6305f?auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    title: "Innovación en Producción Porcina",
    content: "Implementación de nuevas tecnologías en el manejo de cerdos y su impacto en la eficiencia productiva...",
    author: "Dr. Juan Pérez",
    date: "2024-03-08",
    province: "Corrientes",
    school: "Escuela Técnica N°7 - Corrientes",
    activityType: "porcinos",
    image: "https://images.unsplash.com/photo-1604848698030-c434ba08ece1?auto=format&fit=crop&q=80"
  },
  {
    id: 4,
    title: "Producción Apícola: Análisis de Mercado",
    content: "Estudio de mercado y rentabilidad de la producción de miel y derivados apícolas...",
    author: "Lic. Ana Martínez",
    date: "2024-03-05",
    province: "Misiones",
    school: "Instituto Agrario N°23 - Misiones",
    activityType: "apicultura",
    image: "https://images.unsplash.com/photo-1587773403675-ba676c3e9ce4?auto=format&fit=crop&q=80"
  },
  {
    id: 5,
    title: "Vinicultura: Costos y Rendimientos",
    content: "Análisis económico de la producción vitivinícola y factores que influyen en la calidad del producto...",
    author: "Ing. Roberto Sánchez",
    date: "2024-03-01",
    province: "Mendoza",
    school: "Instituto Agrícola N°12 - Mendoza",
    activityType: "vinicultura",
    image: "https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?auto=format&fit=crop&q=80"
  }
];

const BlogPage: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    province: '',
    activityType: '',
    school: ''
  });

  const handleFilterChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value
    });
  };

  const filteredPosts = mockPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesProvince = !filters.province || post.province === filters.province;
    const matchesActivity = !filters.activityType || post.activityType === filters.activityType;
    const matchesSchool = !filters.school || post.school === filters.school;
    
    return matchesSearch && matchesProvince && matchesActivity && matchesSchool;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Blog</h1>
          <button
            onClick={() => navigate('/blog/new')}
            className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
          >
            <Plus className="h-5 w-5" />
            <span>Nueva Publicación</span>
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center space-x-2 mb-4">
            <Filter className="h-5 w-5 text-gray-400" />
            <h2 className="text-lg font-semibold text-gray-800">Filtros</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                Buscar
              </label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Buscar publicaciones..."
                  className="pl-10 w-full input"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label htmlFor="province" className="block text-sm font-medium text-gray-700 mb-1">
                Provincia
              </label>
              <select
                id="province"
                name="province"
                className="w-full input"
                value={filters.province}
                onChange={handleFilterChange}
              >
                <option value="">Todas las provincias</option>
                {provinces.map(province => (
                  <option key={province} value={province}>{province}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="activityType" className="block text-sm font-medium text-gray-700 mb-1">
                Actividad
              </label>
              <select
                id="activityType"
                name="activityType"
                className="w-full input"
                value={filters.activityType}
                onChange={handleFilterChange}
              >
                <option value="">Todas las actividades</option>
                {Object.entries(agriculturalActivities).map(([key, _]) => (
                  <option key={key} value={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="school" className="block text-sm font-medium text-gray-700 mb-1">
                Escuela
              </label>
              <select
                id="school"
                name="school"
                className="w-full input"
                value={filters.school}
                onChange={handleFilterChange}
              >
                <option value="">Todas las escuelas</option>
                {schools.map(school => (
                  <option key={school} value={school}>{school}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {filteredPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              )}
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.content}</p>
                <div className="space-y-2 text-sm text-gray-500">
                  <div className="flex justify-between items-center">
                    <span>{post.author}</span>
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>{post.province}</span>
                    <span>{post.school.split(' - ')[0]}</span>
                  </div>
                </div>
                <button className="mt-4 text-green-600 hover:text-green-700 font-medium">
                  Leer más →
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPage;