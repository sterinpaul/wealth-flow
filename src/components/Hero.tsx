import { motion } from 'framer-motion';

const Hero = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  return (
    <section id="home" className="min-h-screen grid place-items-center pt-20 pb-16 relative overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="https://res.cloudinary.com/cloud-personal-project/video/upload/v1753657982/background-video_ea6rji.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className='mt-52'
        >
          <motion.h1 
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            <span className="text-white">BY TRADERS</span><br/>
            <span className="text-white">FOR TRADERS</span><br/>
            <span className="text-white">ZERO FEES</span>
          </motion.h1>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto custom-box-shadow p-1 rounded-xl"
          >
            THE WORLD'S MOST VALUE ORIENTED FREE TRADING COMMUNITY
          </motion.p>

          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-6 lg:justify-evenly justify-center items-center"
          >
            <button className="bg-lime-400 bg-[url(/background.svg)] bg-[length:20rem] custom-box-shadow overflow-hidden rounded-lg hover:bg-lime-300 shadow shadow-lime-300 transition-all transform hover:scale-105">
              <div className='bg-lime-300/90 w-52 px-8 py-4 text-black font-extrabold leading-5 text-lg'>COMMUNITY CHANNEL</div>
            </button>
            <button className="bg-lime-400 bg-[url(/background.svg)] bg-[length:20rem] custom-box-shadow overflow-hidden rounded-lg hover:bg-lime-300 shadow shadow-lime-300 transition-all transform hover:scale-105">
              <div className='bg-lime-300/90 w-52 px-8 py-4 text-black font-extrabold leading-5 text-lg'>COMMUNITY CHANNEL</div>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;