import { motion } from 'framer-motion';

const TradingAcademy = () => {
  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
          {/* Image - Shows first on mobile, second on desktop */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInRight}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <img src="/images/trading-academy.svg" className='w-full h-full' alt="Trading academy image" />
          </motion.div>

          {/* Text content - Shows second on mobile, first on desktop */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInLeft}
            transition={{ duration: 0.8 }}
            className="space-y-6 order-2 lg:order-1"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-lime-300 mb-6 tracking-wider">
              TRADING ACADEMY
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut 
              aliquip ex ea commodo consequat. Duis aute irure dolor in 
              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla 
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
              culpa qui officia deserunt mollit anim id est laborum. Sed ut 
              perspiciatis unde omnis iste natus error sit voluptatem accusantium 
              doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo 
              inventore veritatis et quasi architecto beatae vitae dicta sunt 
              explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut 
              odit aut fugit.
            </p>

            <motion.button
              className="bg-lime-300 hover:bg-lime-400 text-black px-8 py-4 rounded-lg text-lg font-bold tracking-wider transition-all duration-300 custom-box-shadow transform hover:scale-105"
              whileTap={{ scale: 0.95 }}
            >
              JOIN ACADEMY
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TradingAcademy;