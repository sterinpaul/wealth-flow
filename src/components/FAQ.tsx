import { useState } from 'react';
import { motion } from 'framer-motion';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

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

  const faqs: FAQItem[] = [
    {
      question: "How can I start with Wealth Flow?",
      answer: "Simply join our community channel and get immediate access to our free resources, daily market analysis, and verified trading signals. No upfront costs required."
    },
    {
      question: "How is Wealth Flow doing this for free?",
      answer: "We operate on a profit-sharing model. We only earn when you earn. Our success is directly tied to your trading success, creating perfect alignment of interests."
    },
    {
      question: "What kind of results should I expect with the Wealth Flow Signal Channel?",
      answer: "While past performance doesn't guarantee future results, our verified systems have shown consistent profitability. Results vary based on risk tolerance and capital allocation."
    },
    {
      question: "How do I make sure this is not a scam?",
      answer: "All our systems are verified and transparent. Your funds stay in your own regulated broker account. We provide full track records and have thousands of verified testimonials."
    },
    {
      question: "What can I expect working with the Wealth Flow team?",
      answer: "Daily market analysis, live trading sessions, personalized feedback, access to our automation systems, and mentorship from verified 6-7 figure traders."
    },
    {
      question: "Where can I get all the free stuff that is promised?",
      answer: "Join our community channel to access free trading courses, daily signals, market analysis, tools, and educational resources immediately upon joining."
    }
  ];

  return (
    <section className="bg-gradient-to-b from-black to-lime-950 min-h-screen grid place-items-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-8">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center text-lime-300 mb-16"
        >
          FAQ's
        </motion.h2>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="w-full space-y-0"
        >
          {faqs.map((faq, index,arr) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
              className={`${index === 0 && "rounded-t-2xl"} ${index === (arr.length-1) && "rounded-b-2xl"} border-[0.5px] odd:border-r-neutral-700 even:border-l-neutral-700 border-lime-200 bg-gradient-to-r from-neutral-800 to-lime-200/30 overflow-hidden`}
            >
              <button
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                className={`w-full p-4 sm:p-6 text-left flex justify-between items-start gap-4 hover:bg-lime-300/10 transition-colors ${
                  openFAQ === index ? 'bg-lime-300/30' : ''
                }`}
              >
                <span className="text-white font-semibold text-sm sm:text-base leading-tight pr-2 flex-1">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openFAQ === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0 mt-0.5"
                >
                </motion.div>
              </button>
              
              <motion.div
                initial={false}
                animate={{ height: openFAQ === index ? "auto" : 0 }}
                transition={{ 
                  duration: 0.3,
                  ease: [0.04, 0.62, 0.23, 0.98]
                }}
                className="overflow-hidden"
              >
                <div className="px-4 sm:px-6 p-4 sm:p-6">
                  <motion.p
                    initial={false}
                    animate={{ 
                      opacity: openFAQ === index ? 1 : 0,
                      y: openFAQ === index ? 0 : -10
                    }}
                    transition={{ 
                      duration: 0.2,
                      delay: openFAQ === index ? 0.1 : 0
                    }}
                    className="text-gray-300 text-sm sm:text-base leading-relaxed"
                  >
                    {faq.answer}
                  </motion.p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;