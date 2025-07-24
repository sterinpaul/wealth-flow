import { motion } from "framer-motion";

const ValueEcosystem = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="py-16 bg-lime-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-black mb-16"
        >
          OUR VALUE CENTRIC ECOSYSTEM
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-8"
        >
          {/* Trading Academy */}
          <motion.div
            variants={fadeInUp}
            className="bg-[url(/background.svg)] bg-[length:20rem] rounded-2xl overflow-hidden text-center"
          >
            <div
              className="p-8 flex flex-col h-full"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, black 0%, rgba(0,0,0,0.9) 70%, transparent 100%)",
              }}
            >
              <div className="h-full">
                <img
                  src="/icons/trading.svg"
                  alt="Trading academy icon"
                  className="w-12 h-12 text-lime-300 mx-auto mb-4"
                />
                <h3 className="text-white text-xl leading-3 font-bold mb-2">
                  WEALTH FLOW
                </h3>
                <h4 className="text-white text-lg font-semibold mb-4">
                  TRADING ACADEMY
                </h4>
                <ul className="text-gray-300 text-sm space-y-4 flex flex-col items-start">
                  <li className="flex gap-2">
                    <img
                      src="/icons/arrow-small.svg"
                      className="w-6 h-6"
                      alt="Arrow point icon"
                    />
                    <p className="text-left justify-normal">
                      Step by step beginner to advanced level education
                    </p>
                  </li>
                  <li className="flex gap-2">
                    <img
                      src="/icons/arrow-small.svg"
                      className="w-6 h-6"
                      alt="Arrow point icon"
                    />
                    <p className="text-left justify-normal">
                      Structured and crafted to precision by verified 6-7 figure
                      traders
                    </p>
                  </li>
                  <li className="flex gap-2">
                    <img
                      src="/icons/arrow-small.svg"
                      className="w-6 h-6"
                      alt="Arrow point icon"
                    />
                    <p className="text-left justify-normal">
                      Weekly trading calls and back-test sessions
                    </p>
                  </li>
                  <li className="flex gap-2">
                    <img
                      src="/icons/arrow-small.svg"
                      className="w-6 h-6"
                      alt="Arrow point icon"
                    />
                    <p className="text-left justify-normal">
                      Feedbacks and support on perfecting the right trading
                      practices
                    </p>
                  </li>
                </ul>
              </div>
              <button className="bg-lime-300 text-black w-full p-4 mt-4 rounded-lg cursor-pointer hover:bg-lime-400 transition-all delay-100 flex items-center justify-between">
                <span className="mx-auto font-bold">SELECT</span>
                <img
                  src="/icons/arrow-value-button.svg"
                  className="w-12 h-12"
                  alt="Arrow icon"
                />
              </button>
            </div>
          </motion.div>

          {/* Verified Automation */}
          <motion.div
            variants={fadeInUp}
            className=" bg-[url(/background.svg)] bg-[length:20rem] rounded-2xl overflow-hidden text-center"
          >
            <div
              className="p-8 flex flex-col h-full"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, black 0%, rgba(0,0,0,0.9) 70%, transparent 100%)",
              }}
            >
              <div className="h-full">
                <img
                  src="/icons/automation.svg"
                  alt="Automation icon"
                  className="w-12 h-12 text-lime-300 mx-auto mb-4"
                />
                <h3 className="text-white leading-3 text-xl font-bold mb-2">
                  WEALTH FLOW
                </h3>
                <h4 className="text-white text-lg font-semibold mb-4">
                  VERIFIED AUTOMATION
                </h4>
                <ul className="text-gray-300 text-sm space-y-4 flex flex-col items-start">
                  <li className="flex gap-2">
                    <img
                      src="/icons/arrow-small.svg"
                      className="w-6 h-6"
                      alt="Arrow point icon"
                    />
                    <p className="text-left justify-normal">
                      Automation systems verified for minimal risk and
                      consistent returns
                    </p>
                  </li>
                  <li className="flex gap-2">
                    <img
                      src="/icons/arrow-small.svg"
                      className="w-6 h-6"
                      alt="Arrow point icon"
                    />
                    <p className="text-left justify-normal">
                      Flexible strategies from passive to aggressive based on
                      your risk appetite
                    </p>
                  </li>
                  <li className="flex gap-2">
                    <img
                      src="/icons/arrow-small.svg"
                      className="w-6 h-6"
                      alt="Arrow point icon"
                    />
                    <p className="text-left justify-normal">
                      Funds managed in your own regulated broker account with
                      full control
                    </p>
                  </li>
                  <li className="flex gap-2">
                    <img
                      src="/icons/arrow-small.svg"
                      className="w-6 h-6"
                      alt="Arrow point icon"
                    />
                    <p className="text-left justify-normal">
                      Zero upfront fees, we only earn through profit-sharing
                    </p>
                  </li>
                </ul>
              </div>
              <button className="bg-lime-300 text-black w-full p-4 mt-4 rounded-lg cursor-pointer hover:bg-lime-400 transition-all delay-100 flex items-center justify-between">
                <span className="mx-auto font-bold">SELECT</span>
                <img
                  src="/icons/arrow-value-button.svg"
                  className="w-12 h-12"
                  alt="Arrow icon"
                />
              </button>
            </div>
          </motion.div>

          {/* Community */}
          <motion.div
            variants={fadeInUp}
            className=" bg-[url(/background.svg)] bg-[length:20rem] rounded-2xl overflow-hidden text-center"
          >
            <div
              className="p-8 flex flex-col h-full"
              style={{
                backgroundImage:
                  "linear-gradient(to bottom, black 0%, rgba(0,0,0,0.9) 70%, transparent 100%)",
              }}
            >
              <div className="h-full">
                <img
                  src="/icons/community.svg"
                  alt="Community icon"
                  className="w-12 h-12 text-lime-300 mx-auto mb-4"
                />
                <h3 className="text-white leading-3 text-xl font-bold mb-2">
                  WEALTH FLOW
                </h3>
                <h4 className="text-white text-lg font-semibold mb-4">
                  COMMUNITY
                </h4>
                <ul className="text-gray-300 text-sm space-y-4 flex flex-col items-start">
                  <li className="flex gap-2 items-start">
                    <img
                      src="/icons/arrow-small.svg"
                      className="w-6 h-6 mt-1"
                      alt="Arrow point icon"
                    />
                    <p className="text-left">
                      Exclusive community for traders focused on growth,
                      learning, and results
                    </p>
                  </li>
                  <li className="flex gap-2 items-start">
                    <img
                      src="/icons/arrow-small.svg"
                      className="w-6 h-6 mt-1"
                      alt="Arrow point icon"
                    />
                    <p className="text-left">
                      Daily market analysis, trade ideas, and live insights from
                      experts
                    </p>
                  </li>
                  <li className="flex gap-2 items-start">
                    <img
                      src="/icons/arrow-small.svg"
                      className="w-6 h-6 mt-1"
                      alt="Arrow point icon"
                    />
                    <p className="text-left">
                      Access to free trading courses, tools, and resources
                    </p>
                  </li>
                  <li className="flex gap-2 items-start">
                    <img
                      src="/icons/arrow-small.svg"
                      className="w-6 h-6 mt-1"
                      alt="Arrow point icon"
                    />
                    <p className="text-left">
                      Supportive network for discussions, Q&A, and mentorship
                    </p>
                  </li>
                </ul>
              </div>
              <button className="bg-lime-300 text-black w-full p-4 mt-4 rounded-lg cursor-pointer hover:bg-lime-400 transition-all delay-100 flex items-center justify-between">
                <span className="mx-auto font-bold">SELECT</span>
                <img
                  src="/icons/arrow-value-button.svg"
                  className="w-12 h-12"
                  alt="Arrow icon"
                />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ValueEcosystem;
