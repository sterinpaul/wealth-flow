import { motion } from 'framer-motion';
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/outline';

const ContactUs = () => {
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

  const socialIcons = [
    {
      name: 'Telegram',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16l-1.61 7.548c-.12.543-.444.676-.9.42l-2.504-1.835-1.207 1.159c-.135.133-.246.246-.504.246l.18-2.52L17.945 7.2c.165-.144-.036-.225-.256-.08L10.665 12.4l-2.45-.762c-.533-.166-.544-.533.113-.789L20.47 7.243c.444-.166.833.108.69.789l.408-.872z"/>
        </svg>
      ),
      url: '#',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Instagram',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      url: '#',
      color: 'hover:text-pink-400'
    },
    {
      name: 'Facebook',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      url: '#',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Twitter',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      url: '#',
      color: 'hover:text-sky-400'
    }
  ];

  return (
    <section className="bg-gradient-to-b from-lime-950 to-black grid place-items-center min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            className="text-xl text-gray-300 text-center mb-16 max-w-2xl mx-auto"
          >
            Get in touch with our trading experts and join our community
          </motion.p>

          <div className="grid gap-12 justify-center">
            {/* Contact Information */}
            <motion.div 
              variants={fadeInUp}
              className="space-y-8"
            >
              {/* Contact Details */}
              <div className="bg-gradient-to-r from-neutral-800 to-lime-200/30 border border-lime-200/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-lime-300/20 rounded-lg flex items-center justify-center">
                      <EnvelopeIcon className="w-6 h-6 text-lime-300" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Email</h4>
                      <p className="text-gray-300">support@wealthflow.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-lime-300/20 rounded-lg flex items-center justify-center">
                      <PhoneIcon className="w-6 h-6 text-lime-300" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Phone</h4>
                      <p className="text-gray-300">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-lime-300/20 rounded-lg flex items-center justify-center">
                      <MapPinIcon className="w-6 h-6 text-lime-300" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold">Office</h4>
                      <p className="text-gray-300">123 Trading Street<br />Financial District, NY 10004</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Icons */}
              <div className="bg-gradient-to-r from-neutral-800 to-lime-200/30 border border-lime-200/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Follow Us</h3>
                
                <div className="flex justify-center space-x-6">
                  {socialIcons.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
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
                  Join our community and stay updated with the latest trading insights
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;