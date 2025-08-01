import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechCorp",
    text: "This service completely transformed our business operations. The team's expertise and dedication to excellence is unmatched. Highly recommended!",
    avatar: "SJ",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO",
    company: "StartupXYZ",
    text: "Outstanding results! The innovative approach and attention to detail exceeded our expectations. Our ROI increased by 300% within the first quarter.",
    avatar: "MC",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Product Manager",
    company: "InnovateNow",
    text: "Professional, reliable, and incredibly talented. They delivered exactly what we needed, on time and within budget. A truly exceptional experience.",
    avatar: "ER",
  },
  {
    id: 4,
    name: "David Thompson",
    role: "CTO",
    company: "FutureTech",
    text: "The quality of work and level of support provided is phenomenal. Our productivity has improved significantly since implementing their solutions.",
    avatar: "DT",
  },
  {
    id: 5,
    name: "Lisa Park",
    role: "Operations Manager",
    company: "GlobalCorp",
    text: "Exceptional service from start to finish. The team went above and beyond to ensure our success. We couldn't be happier with the results!",
    avatar: "LP",
  },
  {
    id: 6,
    name: "Sterin Paul",
    role: "CTO",
    company: "Innovento",
    text: "Always getting more than expected.",
    avatar: "SP",
  },
];

const SPEED_PX_PER_MS = 0.06; // tweak this (higher = faster)

const Testimonials = () => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [pause, setPause] = useState(false);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return; // respect user preference

    let rafId: number;
    let lastTs: number | null = null;

    const loop = (ts: number) => {
      if (lastTs == null) lastTs = ts;
      const delta = ts - lastTs;
      lastTs = ts;

      if (!pause) {
        const half = el.scrollWidth / 2; // because we duplicated the content
        el.scrollLeft += delta * SPEED_PX_PER_MS;

        if (el.scrollLeft >= half) {
          // jump back by half to create the infinite loop illusion
          el.scrollLeft -= half;
        }
      }

      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId);
  }, [pause]);

  const duplicated = [...testimonials, ...testimonials];

  return (
    <div
      id="testimonials"
      className="py-20 bg-black flex flex-col gap-12 justify-center items-center px-4"
    >
      {/* Title */}
      <motion.h1
        className="text-4xl md:text-5xl font-bold text-lime-300 mb-10 tracking-widest"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        TESTIMONIALS
      </motion.h1>
      <div className="relative h-full w-full">
        <div className="absolute left-0 w-1/3 h-full bg-[linear-gradient(to_right,_rgba(0,0,0,1)_0%,_rgba(0,0,0,0.8)_25%,_rgba(0,0,0,0.5)_50%,_rgba(0,0,0,0.2)_75%,_rgba(0,0,0,0)_100%)]"></div>
        <div className="absolute right-0 w-1/3 h-full bg-[linear-gradient(to_left,_rgba(0,0,0,1)_0%,_rgba(0,0,0,0.8)_25%,_rgba(0,0,0,0.5)_50%,_rgba(0,0,0,0.2)_75%,_rgba(0,0,0,0)_100%)]"></div>
        <div className="absolute -top-4 h-10 w-full rounded-[100%] bg-black"></div>
        <div className="absolute -bottom-4 h-10 w-full rounded-[100%] bg-black"></div>

        <div
          ref={scrollerRef}
          onMouseEnter={() => setPause(true)}
          onMouseLeave={() => setPause(false)}
          className="w-full grid grid-flow-col auto-cols-min gap-6 overflow-x-auto hide-scrollbar"
        >
          {duplicated.map((testimonial, idx) => (
            <div
              key={`${testimonial.id}-${idx}`}
              className="min-w-72 h-full flex flex-col bg-gradient-to-br from-lime-300 via-lime-400 to-lime-500 shadow-2xl px-6 py-10"
            >
              {/* GROWING TEXT BLOCK */}
              <div className="grow py-2">
                <p className="text-black/20 leading-5 text-4xl font-serif">"</p>
                <p className="text-black text-sm leading-relaxed italic">
                  {testimonial.text}
                </p>
              </div>

              {/* AUTHOR BLOCK */}
              <div className="mt-4 pt-4 border-t border-black/10">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-black text-lime-400 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h3 className="text-black font-bold text-base">
                      {testimonial.name}
                    </h3>
                    <p className="text-black/70 text-xs">{testimonial.role}</p>
                    <p className="text-black/70 text-xs font-semibold">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Get in Touch Button */}
      <motion.button
        className="bg-lime-300 hover:bg-lime-400 text-black px-10 py-4 rounded-2xl text-lg cursor-pointer font-bold tracking-wider transition-all duration-300 custom-box-shadow transform hover:scale-105"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        whileTap={{ scale: 0.95 }}
      >
        GET IN TOUCH
      </motion.button>
    </div>
  );
};

export default Testimonials;
