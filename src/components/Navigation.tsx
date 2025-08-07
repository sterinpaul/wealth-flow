import { useState } from 'react';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon, UserIcon } from "@heroicons/react/24/solid";
import { useNavigate } from 'react-router-dom';

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const navigate = useNavigate();

  const navigateHandler = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }else{
      navigate(`/`,{state: { section }  });
    }
  }

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-gradient-to-b from-lime-950/40 to-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <img src="/icons/logo.svg" className="w-14 h-14 drop-shadow-lg" />
          </motion.div>
          
          <div className="hidden md:flex space-x-8 items-center">
            <button onClick={()=>navigateHandler("home")} className="cursor-pointer block text-shadow-sm shadow-white text-lime-300 hover:text-white transition-colors">HOME</button>
            <button onClick={()=>navigateHandler("testimonials")} className="cursor-pointer block text-shadow-sm text-lime-300 hover:text-white transition-colors">TESTIMONIALS</button>
            <button className="text-shadow-sm cursor-pointer relative overflow-hidden text-lime-300 px-4 py-2 rounded-lg border-1 hover:text-white transition-colors">
              LOGIN
              <UserIcon className="absolute -z-1 top-1 right-0 h-12 w-12 text-lime-300/20" />
            </button>
          </div>

          <div className="md:hidden grid place-items-center">
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-lime-300"
            >
              {mobileMenuOpen ? <XMarkIcon className='w-8 h-8' /> : <Bars3Icon className='w-8 h-8' />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden  border-t border-lime-500/20"
        >
          <div className="px-4 py-4 space-y-4">
            <button onClick={()=>navigateHandler("home")} className="cursor-pointer block text-shadow-sm text-lime-300 hover:text-white transition-colors">HOME</button>
            <button onClick={()=>navigateHandler("testimonials")} className="cursor-pointer block text-shadow-sm text-lime-300 hover:text-white transition-colors">TESTIMONIALS</button>
            <button className="w-full text-lime-300 py-2">LOGIN</button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navigation;