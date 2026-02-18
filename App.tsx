
import React from 'react';
import { ProfileCard } from './components/ProfileCard';

const App: React.FC = () => {
  const profileData = {
    name: "Zarar Malik", // Inferred from LinkedIn URL provided
    registration: "5022-FOC/BSCS/F23",
    mobile: "03136342135",
    linkedinUrl: "https://www.linkedin.com/in/zarar-malik-94b702374?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    cgpa: "3.37",
    profileImage: "https://res.cloudinary.com/dsxj4d9td/image/upload/v1771433923/WhatsApp_Image_2025-09-20_at_23.34.16_44b568f0_xfiusf.jpg"
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-indigo-50 via-white to-sky-50">
      <ProfileCard data={profileData} />
      <footer className="fixed bottom-4 text-slate-400 text-xs font-medium uppercase tracking-widest">
        Digital Student ID • 2026
      </footer>
    </div>
  );
};

export default App;
