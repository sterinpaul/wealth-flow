import { motion } from 'framer-motion';

const VerifiedAutomation = () => {
  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 }
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section id="verified-automation" className="pt-28 bg-black">
      <div className="mx-auto px-4 sm:px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image - Shows first on mobile, second on desktop */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInRight}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <img src="/images/verified-automation.svg" className='w-full' alt="Verified automation image" />
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
              VERIFIED AUTOMATION
            </h2>
            
            <p className="text-gray-300 text-lg leading-1">
              AUTOMATION - POWERED BY SYPHON AI</p>
            <p className="text-gray-300 text-lg leading-relaxed">
              Wealth Flow is proud to partner with Syphon AI, a leading force in verified trading automation. Through this exclusive collaboration, Syphon AI has agreed to provide our community with direct access to their high-performance systems - fully verified through TradeZella and FX Blue. These cutting-edge strategies are now available to test completely free via copy trading accounts, offered through our partnered broker. Designed for transparency, built for results, and accessible to all Wealth Flow members, this is automation on your terms - intelligent, consistent, and ready to scale your trading journey.
            </p>

            <motion.button
              className="bg-lime-300 hover:bg-lime-400 text-black px-8 py-4 rounded-lg text-lg font-bold tracking-wider transition-all duration-300 custom-box-shadow transform hover:scale-105"
              whileTap={{ scale: 0.95 }}
            >
              JOIN COMMUNITY
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VerifiedAutomation;