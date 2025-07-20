// pages/posts/index.tsx
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PostCard from '@/components/common/PostCard';

const PostsPage: React.FC = () => {
  // Mock data for posts
  const posts = [
    { id: '1', title: 'First Post', content: 'This is the content of the first post.', author: 'John Doe' },
    { id: '2', title: 'Second Post', content: 'Here is some more interesting content for the second post.', author: 'Jane Smith' },
    { id: '3', title: 'Third Post', content: 'A brief overview of the third post.', author: 'Peter Jones' },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto p-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">All Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {posts.map(post => (
            <PostCard key={post.id} title={post.title} content={post.content} author={post.author} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PostsPage;
