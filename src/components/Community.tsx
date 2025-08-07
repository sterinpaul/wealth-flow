import { motion } from "framer-motion";

const Community  = () => {
  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section id="community" className="sm:pb-52 pt-28 bg-black">
      <div className="mx-auto px-4 sm:px-6 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image - Shows first on mobile and desktop */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInRight}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1"
          >
            <img
              src="/images/community.svg"
              className="w-full"
              alt="Community image"
            />
          </motion.div>

          {/* Text content - Shows second on mobile and desktop */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInLeft}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6 order-2"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-lime-300 mb-6 tracking-wider">
              COMMUNITY
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              At Wealth Flow, community is everything. We've created an
              exclusive space for ambitious traders to connect, grow, and win
              together. This isn't just a place to trade it's where mindsets
              shift and results compound. Inside the community, you gain access
              to daily market analysis, expert trade ideas, and live insights.
              You'll find powerful tools, free educational content, and a
              supportive network to guide you through every phase of your
              trading journey. Whether you're asking questions, sharing setups,
              or celebrating milestones this is where traders transform into
              wealth-builders.
            </p>
            <motion.button
              className="bg-lime-300 hover:bg-lime-400 text-black px-8 py-4 rounded-lg text-lg font-bold tracking-wider transition-all duration-300 custom-box-shadow transform hover:scale-105"
              whileTap={{ scale: 0.95 }}
            >
              GET AUTOMATION
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Community;
