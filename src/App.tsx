import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Users from './components/Users';
import Tickets from './components/Tickets';
import UserProfile from './components/UserProfile';
import Analytics from './components/Analytics';

export type User = {
  id: string;
  name: string;
  email: string;
  type: 'tutor' | 'student';
  status: 'active' | 'inactive' | 'suspended';
  registrationDate: string;
  lastActivity: string;
  completedLessons: number;
  rating?: number;
  subjects?: string[];
  phone?: string;
  location?: string;
};

export type Ticket = {
  id: string;
  userId: string;
  userName: string;
  userType: 'tutor' | 'student';
  subject: string;
  description: string;
  status: 'open' | 'in-progress' | 'resolved' | 'closed';
  priority: 'low' | 'medium' | 'high' | 'urgent';
  createdAt: string;
  updatedAt: string;
  assignedTo?: string;
  category: string;
};

type ViewType = 'dashboard' | 'users' | 'tickets' | 'analytics' | 'profile';

function App() {
  const [currentView, setCurrentView] = useState<ViewType>('dashboard');
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);

  const handleViewProfile = (userId: string) => {
    setSelectedUserId(userId);
    setCurrentView('profile');
  };

  const renderContent = () => {
    switch (currentView) {
      case 'dashboard':
        return <Dashboard onViewProfile={handleViewProfile} />;
      case 'users':
        return <Users onViewProfile={handleViewProfile} />;
      case 'tickets':
        return <Tickets onViewProfile={handleViewProfile} />;
      case 'analytics':
        return <Analytics />;
      case 'profile':
        return <UserProfile userId={selectedUserId} onBack={() => setCurrentView('users')} />;
      default:
        return <Dashboard onViewProfile={handleViewProfile} />;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar currentView={currentView} onViewChange={setCurrentView} />
      <main className="flex-1 ml-64">
        <div className="p-8">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}

export default App;