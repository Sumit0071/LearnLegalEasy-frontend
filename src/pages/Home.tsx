import React from 'react';
import NavBar from '@/components/NavBar';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

const Home: React.FC = () => {
  const darkMode = useSelector((state: RootState) => state.theme?.darkMode);

  return (
    <div
      className={`relative min-h-screen overflow-hidden ${
        darkMode ? 'bg-gray-950 text-white' : 'bg-white text-black'
      }`}
    >
      {/* Full-page gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-transparent to-indigo-300 opacity-60 z-0"></div>

      <NavBar />

      <div className="relative z-10 mt-20 px-6 md:px-20">
        {/* Hero Section */}
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Don’t Understand Legal Terms?
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-2">
            Search less, understand more — <span className="font-semibold text-indigo-600 dark:text-indigo-400">LearnLegal Easy</span> breaks it down.
          </p>
          <p className="text-md md:text-lg text-gray-500 dark:text-gray-400">
            Built for clarity, powered by AI, trusted by learners and professionals.
          </p>
        </div>

        {/* Video Section */}
        <div className="max-w-2xl mx-auto">
          <div className="w-full h-11 rounded-t-lg bg-gray-900 flex justify-start items-center space-x-1.5 px-3">
            <span className="w-3 h-3 rounded-full bg-red-400"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
            <span className="w-3 h-3 rounded-full bg-green-400"></span>
          </div>
          <div className="bg-gray-700 border-t-0 w-full h-96 rounded-b-lg overflow-hidden">
            <video className="h-full w-full" controls>
              <source
                src="https://docs.material-tailwind.com/demo.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
