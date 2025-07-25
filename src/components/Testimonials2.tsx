import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechCorp",
    text: "This service completely transformed our business operations. The team's expertise and dedication to excellence is unmatched. Highly recommended!",
    avatar: "SJ"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO",
    company: "StartupXYZ",
    text: "Outstanding results! The innovative approach and attention to detail exceeded our expectations. Our ROI increased by 300% within the first quarter.",
    avatar: "MC"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Product Manager",
    company: "InnovateNow",
    text: "Professional, reliable, and incredibly talented. They delivered exactly what we needed, on time and within budget. A truly exceptional experience.",
    avatar: "ER"
  },
  {
    id: 4,
    name: "David Thompson",
    role: "CTO",
    company: "FutureTech",
    text: "The quality of work and level of support provided is phenomenal. Our productivity has improved significantly since implementing their solutions.",
    avatar: "DT"
  },
  {
    id: 5,
    name: "Lisa Park",
    role: "Operations Manager",
    company: "GlobalCorp",
    text: "Exceptional service from start to finish. The team went above and beyond to ensure our success. We couldn't be happier with the results!",
    avatar: "LP"
  }
];

const Testimonials2 = ()=> {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => prev - 72); // 360/5 = 72 degrees per card
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const radius = 280; // Distance from center

  return (
    <div id="testimonials" className="min-h-screen bg-black flex flex-col items-center justify-center p-8 overflow-hidden">
      {/* Title */}
      <motion.h1 
        className="text-4xl md:text-5xl font-bold text-lime-300 mb-20 tracking-widest"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        TESTIMONIALS
      </motion.h1>

      {/* Carousel Container */}
      <div className="relative w-full max-w-4xl h-96 mb-20" style={{ perspective: '1200px' }}>
        <motion.div
          className="relative w-full h-full"
          style={{ transformStyle: 'preserve-3d' }}
          animate={{ rotateY: rotation }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {testimonials.map((testimonial, index) => {
            const angle = (index * 72) * (Math.PI / 180); // Convert to radians
            const x = Math.sin(angle) * radius;
            const z = Math.cos(angle) * radius;
            
            return (
              <motion.div
                key={testimonial.id}
                className="absolute w-64 h-80 top-1/2 left-1/2"
                style={{
                  transform: `translate(-50%, -50%) translate3d(${x}px, 0, ${z}px) rotateY(${index * 72}deg)`,
                  transformStyle: 'preserve-3d'
                }}
              >
                <div className="w-full h-full bg-gradient-to-br from-lime-300 via-lime-400 to-lime-500 rounded-lg shadow-2xl p-6 flex flex-col justify-between transform-gpu backface-hidden">
                  {/* Quote Icon */}
                  <div className="text-black/20 text-4xl font-serif mb-2">"</div>
                  
                  {/* Testimonial Text */}
                  <div className="flex-1 flex items-center">
                    <p className="text-black text-sm leading-relaxed italic">
                      {testimonial.text}
                    </p>
                  </div>

                  {/* Author Section */}
                  <div className="mt-4 pt-4 border-t border-black/10">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 bg-black text-lime-400 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h3 className="text-black font-bold text-base">{testimonial.name}</h3>
                        <p className="text-black/70 text-xs">{testimonial.role}</p>
                        <p className="text-black/70 text-xs font-semibold">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Get in Touch Button */}
      <motion.button
        className="bg-lime-300 hover:bg-lime-400 text-black px-10 py-4 rounded-2xl text-lg font-bold tracking-wider transition-all duration-300 shadow-lg transform hover:scale-105"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        whileTap={{ scale: 0.95 }}
      >
        GET IN TOUCH
      </motion.button>

      {/* Navigation Dots */}
      <div className="flex space-x-3 mt-8">
        {testimonials.map((_, index) => {
          const isActive = Math.abs(rotation / -72) % testimonials.length === index;
          return (
            <motion.button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                isActive ? 'bg-lime-300 w-6' : 'bg-lime-300/40'
              }`}
              onClick={() => setRotation(-index * 72)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          );
        })}
      </div>
    </div>
  );
}
export default Testimonials2