'use client';

import React, { useEffect } from 'react';

const TeleportLink: React.FC = () => {
  useEffect(() => {
    // Open the external URL in a new tab
    window.open('https://www.acolegames.dev', '_blank');
    // window.open('https://sites.google.com/view/acoleschoolgames/', '_blank');

    // After a short delay, navigate the user back to the homepage
    setTimeout(() => {
      window.location.href = '/'; // Redirect to the homepage
    }, 2000); // You can adjust the time delay if needed
  }, []);

  return (
    <div>
      Redirecting to acolegames.dev
    </div>
  );
};

export default TeleportLink;
