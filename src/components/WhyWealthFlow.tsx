import { motion } from 'framer-motion';

const WhyWealthFlow = () => {
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

  const features = [
    {
      icon: "/icons/flow-traders.svg",
      title: "DESIGNED FOR TRADERS",
      description: "Created from real market experience. We know what works, and we teach it with clarity and focus."
    },
    {
      icon: "/icons/flow-ecosystem.svg",
      title: "ALL-IN-ONE ECOSYSTEM",
      description: "Everything you need in one place. No need to jump between platforms or services."
    },
    {
      icon: "/icons/flow-real.svg",
      title: "PROVEN SYSTEMS. REAL RESULTS.",
      description: "Our track record speaks for itself with verified results and transparent performance."
    },
    {
      icon: "/icons/flow-education.svg",
      title: "EDUCATION WITHOUT LIMITS",
      description: "Comprehensive learning resources from beginner to advanced level trading."
    },
    {
      icon: "/icons/flow-precision.svg",
      title: "ZERO NOISE, FULL PRECISION",
      description: "Cut through the market noise with precise, actionable trading signals and analysis."
    },
    {
      icon: "/icons/flow-community.svg",
      title: "COMMUNITY THAT LEVELS YOU UP",
      description: "Join a network of serious traders committed to growth and mutual success."
    }
  ];

  return (
    <section className=" bg-lime-300/50 bg-[url(/background.svg)] bg-[length:100rem]">
      <div className="w-full h-full bg-black/85 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-lime-300 mb-16"
        >
          WHY WEALTH FLOW?
        </motion.h2>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          {features.map(({title,description,icon}, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp} 
              className="rounded-xl p-0.25 bg-gradient-to-b from-lime-300 to-neutral-700"
            >
              <div className='bg-gradient-to-b from-stone-600/95 to-neutral-700/70 rounded-xl p-6 text-center w-full h-full'>
              <div className='flex gap-4 mb-2'>
            <img
                      src={icon}
                      className="w-12 h-12"
                      alt="Arrow point icon"
                    />
              <h3 className="text-white font-bold text-lg text-left mb-2">{title}</h3>
              </div>
              <p className="text-gray-300 text-sm text-left">{description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      </div>
    </section>
  );
};

export default WhyWealthFlow;