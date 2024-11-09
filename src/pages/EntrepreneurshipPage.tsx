import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Entrepreneurship } from '../types';
import { Lightbulb, Target, Users, Briefcase } from 'lucide-react';

const EntrepreneurshipPage: React.FC = () => {
  const [formData, setFormData] = useState<Omit<Entrepreneurship, 'id' | 'status' | 'submissionDate'>>({
    title: '',
    description: '',
    sector: '',
    impact: '',
    resources: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to an API
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="container mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Propuesta de Emprendimiento</h1>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-green-100 p-3 rounded-lg">
                <Lightbulb className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Innovación</h3>
                <p className="text-gray-600">Desarrolla ideas innovadoras que resuelvan problemas reales</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-blue-100 p-3 rounded-lg">
                <Target className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Impacto</h3>
                <p className="text-gray-600">Genera un impacto positivo en tu comunidad</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-purple-100 p-3 rounded-lg">
                <Users className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Colaboración</h3>
                <p className="text-gray-600">Trabaja en equipo y comparte conocimientos</p>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                Título del Proyecto
              </label>
              <input
                type="text"
                id="title"
                name="title"
                required
                className="w-full input"
                value={formData.title}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="sector" className="block text-sm font-medium text-gray-700 mb-1">
                Sector
              </label>
              <select
                id="sector"
                name="sector"
                required
                className="w-full input"
                value={formData.sector}
                onChange={handleChange}
              >
                <option value="">Selecciona un sector</option>
                <option value="tecnologia">Tecnología</option>
                <option value="educacion">Educación</option>
                <option value="salud">Salud</option>
                <option value="ambiente">Medio Ambiente</option>
                <option value="social">Impacto Social</option>
              </select>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Descripción del Proyecto
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows={4}
                className="w-full input"
                value={formData.description}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="impact" className="block text-sm font-medium text-gray-700 mb-1">
                Impacto Esperado
              </label>
              <textarea
                id="impact"
                name="impact"
                required
                rows={3}
                className="w-full input"
                value={formData.impact}
                onChange={handleChange}
              />
            </div>

            <div>
              <label htmlFor="resources" className="block text-sm font-medium text-gray-700 mb-1">
                Recursos Necesarios
              </label>
              <textarea
                id="resources"
                name="resources"
                required
                rows={3}
                className="w-full input"
                value={formData.resources}
                onChange={handleChange}
              />
            </div>

            <button type="submit" className="w-full btn btn-primary">
              Enviar Propuesta
            </button>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default EntrepreneurshipPage;