import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { SchoolActivity } from '../types';
import { BookOpen, Users, Target, Sparkles } from 'lucide-react';

const SchoolRegistrationPage: React.FC = () => {
  const [formData, setFormData] = useState<Omit<SchoolActivity, 'id' | 'status' | 'submissionDate'>>({
    schoolName: '',
    activityType: '',
    description: '',
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
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Proponé Actividades para tu Institución</h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">¿Por qué proponer actividades?</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-green-100 p-2 rounded-lg">
                    <Target className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Impacto Directo</h3>
                    <p className="text-gray-600 text-sm">Contribuí al desarrollo educativo de tu institución</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Aprendizaje Práctico</h3>
                    <p className="text-gray-600 text-sm">Conectá la teoría con experiencias reales</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-purple-100 p-2 rounded-lg">
                    <Users className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Trabajo Colaborativo</h3>
                    <p className="text-gray-600 text-sm">Fomentá el trabajo en equipo y el intercambio de ideas</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-orange-100 p-2 rounded-lg">
                    <Sparkles className="h-5 w-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Innovación Educativa</h3>
                    <p className="text-gray-600 text-sm">Proponé nuevas formas de aprender y enseñar</p>
                  </div>
                </div>
              </div>
            </div>

            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80"
              alt="Innovación Educativa"
              className="rounded-lg shadow-md w-full h-64 object-cover"
            />
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 space-y-6">
            <div>
              <label htmlFor="schoolName" className="block text-sm font-medium text-gray-700 mb-1">
                Institución
              </label>
              <input
                type="text"
                id="schoolName"
                name="schoolName"
                required
                className="w-full input"
                value={formData.schoolName}
                onChange={handleChange}
                placeholder="Nombre de tu institución"
              />
            </div>

            <div>
              <label htmlFor="activityType" className="block text-sm font-medium text-gray-700 mb-1">
                Tipo de Actividad
              </label>
              <select
                id="activityType"
                name="activityType"
                required
                className="w-full input"
                value={formData.activityType}
                onChange={handleChange}
              >
                <option value="">Selecciona un tipo</option>
                <option value="bovinos">Producción Bovina</option>
                <option value="porcinos">Producción Porcina</option>
                <option value="ovinos">Producción Ovina</option>
                <option value="granos">Cultivo de Granos</option>
                <option value="industria">Industria Alimentaria</option>
                <option value="frutas">Frutas y Hortalizas</option>
                <option value="apicultura">Apicultura</option>
                <option value="vinicultura">Vinicultura</option>
              </select>
            </div>

            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Descripción de la Actividad
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows={4}
                className="w-full input"
                value={formData.description}
                onChange={handleChange}
                placeholder="Describe los objetivos y metodología de la actividad propuesta"
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

export default SchoolRegistrationPage;