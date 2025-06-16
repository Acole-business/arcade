"use client";

import { useEffect } from "react";

const MusicRedirect: React.FC = () => {
  useEffect(() => {
    // Redirect to music.arrowcole.xyz
    window.location.href = "https://music.arrowcole.xyz";
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-green-400 text-xl font-mono">
      Redirecting to music.arrowcole.xyz...
    </div>
  );
};

export default MusicRedirect;
