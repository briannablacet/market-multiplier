// src/pages/walkthrough/index.tsx
import React from 'react';
import MarketingWalkthrough from '../../components/features/MarketingWalkthrough';

const WalkthroughPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 px-4">  // Added px-4 to ensure padding
      <MarketingWalkthrough />
    </div>
  );
};

export default WalkthroughPage;