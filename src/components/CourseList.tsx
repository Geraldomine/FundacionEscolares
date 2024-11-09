import React from 'react';
import { Course } from '../types';

interface CourseListProps {
  courses: Course[];
}

const CourseList: React.FC<CourseListProps> = ({ courses }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {courses.map((course) => (
        <div key={course.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{course.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{course.description}</p>
            <div className="flex justify-between items-center text-sm text-gray-500">
              <span>{course.duration}</span>
              <span>{course.instructor}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseList;