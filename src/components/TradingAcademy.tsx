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
    <section id="trading-academy" className="pb-52 lg:pb-0 bg-black">
      <div className="mx-auto px-4 sm:px-6 lg:px-20">
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
            <img src="/images/trading-academy.svg" className='w-full' alt="Trading academy image" />
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
              The Wealth Flow Trading Academy is where serious traders are made. Designed for beginners and advanced traders alike, our structured education guides you step-by-step through the most powerful trading strategies in the market especially Smart Money Concepts. Each module is crafted by elite traders who consistently earn six to seven figures, ensuring that every lesson is grounded in real-world performance. Beyond the theory, you'll join live sessions, participate in backtesting labs, and receive personalized mentoring to refine your edge. This is more than just learning, it’s a transformation into the confident, strategic trader you're meant to be.
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