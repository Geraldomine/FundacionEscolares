import { Activity } from '../types';

export const agriculturalActivities: { [key: string]: string } = {
  bovinos: "Gestión y cuidado de ganado bovino, incluyendo producción lechera y cárnica. Prácticas de alimentación, sanidad y reproducción.",
  porcinos: "Manejo de producción porcina, abarcando cría, engorde y reproducción. Técnicas modernas de alimentación y bienestar animal.",
  ovinos: "Cría y manejo de ovejas para producción de lana y carne. Incluye esquila, manejo sanitario y mejoramiento genético.",
  granos: "Cultivo y manejo de cereales y oleaginosas. Técnicas de siembra, cosecha y almacenamiento de diferentes variedades.",
  industria: "Procesos de transformación y valor agregado de productos agropecuarios. Incluye elaboración, empaque y conservación.",
  "frutas y hortalizas": "Producción de frutas y verduras, técnicas de cultivo intensivo, manejo integrado de plagas y sistemas de riego.",
  apicultura: "Manejo de colmenas para producción de miel y derivados. Polinización, sanidad apícola y procesamiento de productos.",
  vinicultura: "Cultivo de vid y elaboración de vinos. Incluye manejo del viñedo, procesos de vinificación y control de calidad."
};

export const mockActivities: Activity[] = [
  {
    id: 1,
    title: "Manejo de Bovinos Lecheros",
    description: "Prácticas de ordeñe y manejo sanitario del tambo",
    status: "in_progress",
    hours: 120,
    startDate: "2024-03-01",
    endDate: "2024-06-01",
    school: "Escuela Agrotécnica N°1",
    category: "bovinos",
    teacher: "Dr. Carlos Rodríguez"
  },
  {
    id: 2,
    title: "Cultivo de Trigo",
    description: "Siembra y seguimiento del cultivo de trigo",
    status: "in_progress",
    hours: 80,
    startDate: "2024-03-15",
    endDate: "2024-07-15",
    school: "Instituto Agrario N°23",
    category: "granos",
    teacher: "Ing. María González"
  },
  {
    id: 3,
    title: "Producción Apícola",
    description: "Manejo de colmenas y producción de miel",
    status: "in_progress",
    hours: 60,
    startDate: "2024-02-01",
    endDate: "2024-05-01",
    school: "Escuela Rural N°5",
    category: "apicultura",
    teacher: "Prof. Ana Martínez"
  }
];