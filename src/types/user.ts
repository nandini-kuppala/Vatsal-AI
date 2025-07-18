export interface UserProfile {
  stage: 'pregnancy' | 'infancy' | 'toddlerhood';
  role: 'mother' | 'father';
  incomeRange: 'below-2' | '2-to-8' | 'above-8';
  name: string;
  location: string;
  dueDate?: string;
  babyBirthDate?: string;
  preferredLanguage: string;
}

export interface DashboardData {
  dietPlan: string[];
  exercisePlan: string[];
  reminders: Reminder[];
  progress: ProgressData;
  emergencyContacts: EmergencyContact[];
}

export interface Reminder {
  id: string;
  title: string;
  description: string;
  date: string;
  completed: boolean;
  type: 'checkup' | 'vaccine' | 'diet' | 'exercise';
}

export interface ProgressData {
  weeksPassed: number;
  totalWeeks: number;
  milestones: Milestone[];
}

export interface Milestone {
  id: string;
  title: string;
  description: string;
  completed: boolean;
  week: number;
}

export interface EmergencyContact {
  id: string;
  name: string;
  type: 'hospital' | 'doctor' | 'emergency';
  phone: string;
  address: string;
  distance: string;
}