import { motion } from "framer-motion";
import {
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const ContactUs = () => {
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

  const socialIcons = [
    {
      name: "WhatsApp",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <title>WhatsApp</title>
          <path
            fill="currentColor"
            d="M17.472 14.621c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
          />
        </svg>
      ),
      url: "https://wa.me/16472506205",
      color: "hover:text-green-500",
    },
    {
      name: "Instagram",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <title>Instagram</title>
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
      url: "https://www.instagram.com/wealth.flow.co",
      color: "hover:text-pink-400",
    },
    {
      name: "Circle",
      icon: (
        <svg viewBox="0 0 24 24" className="icon">
          <title>Circle</title>
          <circle cx="12" cy="12" r="7" fill="none" stroke="currentColor" strokeWidth="1.6" />
          <text
            x="12"
            y="16"
            textAnchor="middle"
            fontSize="12"
            fontFamily="Arial, sans-serif"
            fontWeight="bold"
            fill="currentColor"
          >
            C
          </text>
        </svg>
      ),
      url: "https://login.circle.so/sign_in",
      color: "hover:text-indigo-600",
    },
    // {
    //   name: 'Telegram',
    //   icon: (
    //     <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
    //       <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16l-1.61 7.548c-.12.543-.444.676-.9.42l-2.504-1.835-1.207 1.159c-.135.133-.246.246-.504.246l.18-2.52L17.945 7.2c.165-.144-.036-.225-.256-.08L10.665 12.4l-2.45-.762c-.533-.166-.544-.533.113-.789L20.47 7.243c.444-.166.833.108.69.789l.408-.872z"/>
    //     </svg>
    //   ),
    //   url: '#',
    //   color: 'hover:text-blue-400'
    // },
  ];

  return (
    <section className="bg-gradient-to-b from-lime-950 to-black grid place-items-center min-h-screen">
      <div className="mx-auto px-4 sm:px-6 lg:px-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold text-center text-lime-300 mb-4"
          >
            CONTACT US
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-300 text-center mb-10 max-w-2xl mx-auto"
          >
            Get in touch with our trading experts and join our community
          </motion.p>

          <div className="grid gap-12 justify-center">
            {/* Contact Information */}
            <motion.div variants={fadeInUp} className="space-y-8">
              {/* Contact Details */}
              <div className="bg-gradient-to-r from-neutral-800 to-lime-200/30 border border-lime-200/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Get in Touch
                </h3>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-lime-300/20 rounded-lg flex items-center justify-center">
                      <EnvelopeIcon className="w-6 h-6 text-lime-300" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Email</h4>
                      <p className="text-gray-300">
                        wealthflowofficial@outlook.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-lime-300/20 rounded-lg flex items-center justify-center">
                      <PhoneIcon className="w-6 h-6 text-lime-300" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Phone</h4>
                      <p className="text-gray-300">+1 (647) 250-6205</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="bg-gradient-to-r from-neutral-800 to-lime-200/30 border border-lime-200/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Follow Us
                </h3>

                <div className="flex justify-center space-x-6">
                  {socialIcons.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      className={`flex items-center justify-center w-14 h-14 bg-lime-300/20 rounded-lg text-lime-300 transition-all duration-300 transform hover:scale-110 hover:bg-lime-300/30 ${social.color}`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      {social.icon}
                      <span className="sr-only">{social.name}</span>
                    </motion.a>
                  ))}
                </div>

                <p className="text-center text-gray-300 mt-4 text-sm">
                  Join our community and stay updated with the latest trading
                  insights
                </p>
                <div className="mx-auto text-center mt-4">
                  <Link
                    to="/terms"
                    className="text-lime-300 text-sm hover:text-white"
                  >
                    Terms and Conditions
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
