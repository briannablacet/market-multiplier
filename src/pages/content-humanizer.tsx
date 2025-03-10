// src/pages/content-humanizer.tsx
import React from 'react';
import dynamic from 'next/dynamic';
import { NotificationProvider } from '../context/NotificationContext';
import { WritingStyleProvider } from '../context/WritingStyleContext';

// Use dynamic import with SSR disabled to prevent SSR-related issues with file handling
const ContentHumanizer = dynamic(() => import('../components/features/ContentHumanizer'), {
  ssr: false,
  loading: () => <div className="p-8 text-center">Loading Content Humanizer...</div>
});

const ContentHumanizerPage: React.FC = () => {
  return (
    <NotificationProvider>
      <WritingStyleProvider>
        <div className="container mx-auto">
          <ContentHumanizer />
        </div>
      </WritingStyleProvider>
    </NotificationProvider>
  );
};

export default ContentHumanizerPage;