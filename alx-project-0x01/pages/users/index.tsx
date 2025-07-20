// pages/users/index.tsx
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import UserCard from '@/components/common/UserCard'; // Import UserCard
import { UserProps } from '@/interfaces'; // Import UserProps

interface UsersPageProps {
  users: UserProps[]; // Define props for the component
}

const UsersPage: React.FC<UsersPageProps> = ({ users }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">All Users</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {users.map(user => (
            <UserCard key={user.id} {...user} /> // Pass all user props to UserCard
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users")
  const users = await response.json() // Renamed 'posts' to 'users' for clarity

  return {
    props: {
      users // Pass 'users' as props
    }
  }
}

export default UsersPage;
// export default Users;



// posts.map
