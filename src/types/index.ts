export interface BlogPost {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  province: string;
  school: string;
  activityType: string;
  image?: string;
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
}

export interface User {
  email: string;
  name: string;
}

export interface SchoolActivity {
  id: number;
  schoolName: string;
  activityType: string;
  description: string;
  status: 'pending' | 'approved' | 'rejected';
  submissionDate: string;
}

export interface Entrepreneurship {
  id: number;
  title: string;
  description: string;
  sector: string;
  impact: string;
  resources: string;
  status: 'draft' | 'submitted' | 'in_review';
  submissionDate: string;
}