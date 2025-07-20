// pages/users/index.tsx
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

interface User {
  id: string;
  name: string;
  email: string;
}

const UsersPage: React.FC = () => {
  // Mock data for users
  const users: User[] = [
    { id: 'u1', name: 'Alice Johnson', email: 'alice.j@example.com' },
    { id: 'u2', name: 'Bob Williams', email: 'bob.w@example.com' },
    { id: 'u3', name: 'Charlie Brown', email: 'charlie.b@example.com' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">All Users</h1>
        <div className="bg-white shadow-md rounded-lg p-6 max-w-2xl mx-auto">
          <ul className="divide-y divide-gray-200">
            {users.map(user => (
              <li key={user.id} className="py-4 flex justify-between items-center">
                <div>
                  <p className="text-lg font-medium text-gray-900">{user.name}</p>
                  <p className="text-sm text-gray-500">{user.email}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default UsersPage;
