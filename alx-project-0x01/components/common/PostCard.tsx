// components/common/PostCard.tsx
import React from 'react';

interface PostCardProps {
  title: string;
  content: string;
  author: string;
}

const PostCard: React.FC<PostCardProps> = ({ title, content, author }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4 max-w-sm w-full">
      <h2 className="text-2xl font-semibold text-gray-900 mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{content}</p>
      <p className="text-sm text-gray-500">- {author}</p>
    </div>
  );
};

export default PostCard;
