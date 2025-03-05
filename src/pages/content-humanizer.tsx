// src/pages/content-humanizer.tsx

import React from 'react';
import dynamic from 'next/dynamic';
import { NotificationProvider } from '../context/NotificationContext';
import { WritingStyleProvider } from '../context/WritingStyleContext';
import { MessagingProvider } from '../context/MessagingContext';

// Use dynamic import with SSR disabled to prevent SSR-related issues
const ContentHumanizer = dynamic(() => import('../components/features/ContentHumanizer'), {
  ssr: false,
  loading: () => <div className="p-8 text-center">Loading Content Humanizer...</div>
});

export default function ContentHumanizerPage() {
  return (
    <NotificationProvider>
      <WritingStyleProvider>
        <MessagingProvider>
          <ContentHumanizer />
        </MessagingProvider>
      </WritingStyleProvider>
    </NotificationProvider>
  );
}