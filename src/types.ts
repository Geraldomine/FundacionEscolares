export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

export interface Activity {
  id: number;
  title: string;
  description: string;
  status: 'in_progress' | 'completed' | 'pending';
  hours: number;
  startDate: string;
  endDate: string;
  school: string;
  category: string;
  teacher: string;
}

export interface ActivitySummary {
  category: string;
  description: string;
}