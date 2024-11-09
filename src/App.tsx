import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ActivitiesPage from './pages/ActivitiesPage';
import ActivityFormPage from './pages/ActivityFormPage';
import ProgressFormPage from './pages/ProgressFormPage';
import BlogPage from './pages/BlogPage';
import EntrepreneurshipPage from './pages/EntrepreneurshipPage';
import SchoolRegistrationPage from './pages/SchoolRegistrationPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/activities" element={<ActivitiesPage />} />
        <Route path="/activity-form" element={<ActivityFormPage />} />
        <Route path="/progress-form" element={<ProgressFormPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/entrepreneurship" element={<EntrepreneurshipPage />} />
        <Route path="/school-registration" element={<SchoolRegistrationPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
};

export default App;