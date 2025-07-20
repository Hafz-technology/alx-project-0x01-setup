// components/common/UserCard.tsx
import React from 'react';
import { UserProps } from '@/interfaces'; // Import the UserProps interface

const UserCard: React.FC<UserProps> = ({ id, name, username, email, address, phone, website, company }) => {
  return (
    <div className="max-w-md mx-auto my-6 p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200">
      <div className="flex items-center mb-4">
        {/* User Icon/Avatar - Using a simple SVG for creativity */}
        <div className="flex-shrink-0 mr-4">
          <svg
            className="h-12 w-12 text-blue-500"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
          </svg>
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">{name}</h2>
          <p className="text-md text-gray-600">@{username}</p>
        </div>
      </div>

      <div className="text-gray-700 space-y-2">
        <p>
          <span className="font-semibold">Email:</span> {email}
        </p>
        <p>
          <span className="font-semibold">Phone:</span> {phone}
        </p>
        <p>
          <span className="font-semibold">Website:</span>{' '}
          <a href={`http://${website}`} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            {website}
          </a>
        </p>

        {address && (
          <div className="pt-2 border-t border-gray-200 mt-4">
            <p className="font-semibold text-gray-800 mb-1">Address:</p>
            <p>{address.street}, {address.suite}</p>
            <p>{address.city}, {address.zipcode}</p>
          </div>
        )}

        {company && (
          <div className="pt-2 border-t border-gray-200 mt-4">
            <p className="font-semibold text-gray-800 mb-1">Company:</p>
            <p className="font-medium">{company.name}</p>
            <p className="text-sm italic text-gray-600">"{company.catchPhrase}"</p>
          </div>
        )}
      </div>

      <div className="mt-6 text-right text-sm text-gray-500">
        User ID: {id}
      </div>
    </div>
  );
};

export default UserCard;
