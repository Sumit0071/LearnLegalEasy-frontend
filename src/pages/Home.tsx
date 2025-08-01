import React, { useState } from 'react';
import NavBar from '@/components/NavBar';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { CircleCheckBig } from 'lucide-react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import ScrollToTop from '@/components/ScrollToTop';
import { Footer2 } from '@/components/Footer';
import SignupModal from '../components/Auth/SignupModal'; // ✅ Ensure this exists
import Signup from '@/components/Auth/SignUp'; // ✅ Ensure this exists
import Faq from '@/components/Faq';

const Home: React.FC = () => {
  const darkMode = useSelector( ( state: RootState ) => state.theme?.darkMode );
  const [showSignupModal, setShowSignupModal] = useState( false );

  const Services = [
    'AI-powered legal document review',
    'Automated contract analysis',
    'Intelligent legal research assistant',
    'Build intelligent chronologies',
    'OCR and translation for legal documents',
    'Cloud-based document management',
  ];

  const PricingPlans = [
    {
      name: 'Basic Plan',
      price: 'Free',
      features: ['AI-powered summaries', 'Legal glossary access', 'Community forum'],
      cta: 'Get Started',
    },
    {
      name: 'Pro Plan',
      price: '$20/month',
      features: ['Everything in Basic', 'Priority support', 'Automated contract analysis', 'Advanced legal assistant'],
      cta: 'Upgrade Now',
    },
    {
      name: 'Enterprise Plan',
      price: '$50/month',
      features: ['All Pro features', 'Team collaboration tools', 'Custom AI integration', 'Dedicated account manager'],
      cta: 'Contact Sales',
    },
  ];

  return (
    <div
      id="home"
      className={`relative min-h-screen overflow-x-hidden ${darkMode ? 'bg-gray-950 text-white' : 'bg-white text-black'} ${showSignupModal ? 'overflow-hidden h-screen' : ''
        }`}
    >
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-transparent to-indigo-300 opacity-60 z-0 pointer-events-none"></div>

      {/* Fixed NavBar */}
      <div className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-gray-950 shadow-sm backdrop-blur-md">
        <NavBar onOpenSignup={() => setShowSignupModal( true )} />
      </div>

      {/* Signup Modal */}
      {showSignupModal && (
        <SignupModal onClose={() => setShowSignupModal( false )}>
          <Signup />
        </SignupModal>
      )}

      {/* Main Content */}
      <div className="relative z-10 pt-24 px-6 md:px-20">
        {/* Hero Section */}
        <motion.div
          className="text-center max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Don’t Understand Legal Terms?
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-2">
            Search less, understand more —{' '}
            <span className="font-semibold text-indigo-600 dark:text-indigo-400">LearnLegal Easy</span> breaks it down.
          </p>
          <p className="text-md md:text-lg text-gray-500 dark:text-gray-400">
            Built for clarity, powered by AI, trusted by learners and professionals.
          </p>
        </motion.div>

        {/* Video Preview */}
        <motion.p
          className="text-center max-w-4xl mx-auto mb-3 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:animate-glow drop-shadow-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Take a preview of how to use
        </motion.p>

        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="w-full h-11 rounded-t-lg bg-gray-900 flex space-x-1.5 px-3 items-center">
            <span className="w-3 h-3 rounded-full bg-red-400"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
            <span className="w-3 h-3 rounded-full bg-green-400"></span>
          </div>
          <div className="bg-gray-700 border-t-0 w-full h-96 rounded-b-lg overflow-hidden">
            <video className="h-full w-full" controls>
              <source src="https://docs.material-tailwind.com/demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex justify-center mt-4 p-5 gap-5 flex-wrap"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          <Button className="bg-indigo-500 hover:brightness-110 hover:scale-105 transition-all duration-200 text-white" size="lg">
            <a href="/book-demo">Book a demo</a>
          </Button>
          <Button variant="secondary" size="lg" className="hover:scale-105 transition-all duration-200">
            <a href="/chat">Try it out</a>
          </Button>
        </motion.div>

        {/* Services Section */}
        <h1 className="mb-5 text-2xl md:text-3xl text-center font-bold text-indigo-400">Explore our Services</h1>
        <section id="services" className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {Services.map( ( item, index ) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
            >
              <Card
                className={`shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl p-5 h-full border ${darkMode
                  ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white border-gray-700'
                  : 'bg-gradient-to-br from-white via-gray-50 to-white text-black border-gray-200'
                  } cursor-pointer`}
              >
                <CardHeader className="flex flex-row items-center gap-3">
                  <CircleCheckBig className="text-indigo-500" size={24} />
                  <CardTitle className="text-md md:text-lg font-semibold">{item}</CardTitle>
                </CardHeader>
              </Card>
            </motion.div>
          ) )}
        </section>

        {/* Pricing Section */}
        <h1 className="mb-5 text-2xl md:text-3xl text-center font-bold text-indigo-400 mt-10">Pricing Plans</h1>
        <section id="pricing" className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PricingPlans.map( ( plan, index ) => {
            const isPro = plan.name === 'Pro Plan';

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.5 }}
              >
                <Card
                  className={`relative transition-all duration-300 rounded-2xl p-6 flex flex-col justify-between h-full border shadow-md hover:shadow-xl cursor-pointer
          ${darkMode
                      ? `${isPro ? 'border-green-400' : 'border-gray-700'} bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white`
                      : `${isPro ? 'border-green-500' : 'border-gray-200'} bg-gradient-to-br from-white via-gray-50 to-white text-black`
                    }`}
                >
                  {isPro && (
                    <div className="absolute top-4 right-4 bg-green-500 text-white text-xs px-3 py-1 rounded-full font-semibold shadow-md">
                      Most Popular
                    </div>
                  )}

                  <CardHeader className="mb-4">
                    <CardTitle className="text-xl font-bold mb-1">{plan.name}</CardTitle>
                    <CardDescription className="text-lg font-semibold text-indigo-500">
                      {plan.price}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="mb-4">
                    <ul
                      className={`list-disc pl-5 space-y-2 text-md ${darkMode ? 'text-violet-500' : 'text-gray-700'}`}
                    >
                      {plan.features.map( ( feature, idx ) => (
                        <li key={idx}>{feature}</li>
                      ) )}
                    </ul>
                  </CardContent>

                  <Button className="mt-auto bg-indigo-600 hover:bg-indigo-700 text-white" size="lg">
                    {plan.cta}
                  </Button>
                </Card>
              </motion.div>
            );
          } )}

        </section>
        <div className='mt-10 text-center'>
          <Faq />

        </div>
        {/* Footer */}
        <div className="mt-10">
          <Footer2 />
        </div>
      </div>

      {/* Scroll to Top */}
      <ScrollToTop />
    </div>
  );
};

export default Home;
