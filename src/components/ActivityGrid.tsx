import React from 'react';
import { Activity } from '../types';
import { Clock, User } from 'lucide-react';

interface ActivityGridProps {
  activities: Activity[];
}

const ActivityGrid: React.FC<ActivityGridProps> = ({ activities }) => {
  const getCategoryImage = (category: string) => {
    const images: { [key: string]: string } = {
      bovinos: "https://images.unsplash.com/photo-1596733430284-f7437764b1a9?auto=format&fit=crop&q=80",
      porcinos: "https://images.unsplash.com/photo-1604848698030-c434ba08ece1?auto=format&fit=crop&q=80",
      granos: "https://images.unsplash.com/photo-1535241749838-299277b6305f?auto=format&fit=crop&q=80",
      apicultura: "https://images.unsplash.com/photo-1587773403675-ba676c3e9ce4?auto=format&fit=crop&q=80"
    };
    return images[category] || "https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?auto=format&fit=crop&q=80";
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {activities.map((activity) => (
        <div key={activity.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
          <img
            src={getCategoryImage(activity.category)}
            alt={activity.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{activity.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{activity.description}</p>
            <div className="space-y-2 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>{activity.hours}h</span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="h-4 w-4" />
                <span>{activity.teacher}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivityGrid;