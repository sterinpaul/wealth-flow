import { motion } from 'framer-motion';
import { useEffect } from 'react';

const Terms = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  };

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-lime-300/50 bg-[url(/background.svg)] bg-[length:100rem]">
      <div className="w-full h-full bg-black/85 py-20 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-center text-lime-300 mb-4"
          >
            WEALTH FLOW
          </motion.h1>

          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-lime-300 mb-12"
          >
            TERMS & CONDITIONS
          </motion.h2>

          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-gray-300 space-y-8"
          >
            {/* Introduction */}
            <div>
              <p className="text-lg leading-relaxed mb-6">
                Welcome to Wealth Flow. These Terms & Conditions ("Terms") govern your access to and use of our services, including our free trading course, automation tools, signals, educational content, and community platform (collectively, the "Services").
              </p>
              <p className="text-lg leading-relaxed">
                By accessing or using Wealth Flow, you agree to be bound by these Terms. If you do not agree, please do not use our Services.
              </p>
            </div>

            <hr className="border-lime-300/30" />

            {/* Section 1 */}
            <div>
              <h3 className="text-2xl font-bold text-lime-300 mb-4">1. Eligibility</h3>
              <p className="leading-relaxed">
                You must be at least 18 years old, or the age of legal majority in your jurisdiction, to use Wealth Flow. By using our Services, you confirm that you meet this requirement and that your use complies with all applicable laws.
              </p>
            </div>

            <hr className="border-lime-300/30" />

            {/* Section 2 */}
            <div>
              <h3 className="text-2xl font-bold text-lime-300 mb-4">2. Our Services</h3>
              <p className="leading-relaxed mb-4">Wealth Flow offers:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Free Trading Course: Foundational to advanced Smart Money Concept (SMC) education</li>
                <li>Trade Signals: Real-time alerts from experienced analysts</li>
                <li>Automation Tools: Access to expert advisors (EAs) and trading bots</li>
                <li>Private Community: A space for collaborative learning and growth</li>
                <li>Broker Rebate System: Cashback from our partner broker as you trade</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Wealth Flow does not manage or hold client funds. All trading is executed via your own broker account.
              </p>
            </div>

            <hr className="border-lime-300/30" />

            {/* Section 3 */}
            <div>
              <h3 className="text-2xl font-bold text-lime-300 mb-4">3. User Responsibilities</h3>
              <p className="leading-relaxed mb-4">By using Wealth Flow, you agree to:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Only connect legal and compliant broker accounts</li>
                <li>Retain full control of your funds and trading activity</li>
                <li>Accept all financial risks associated with trading</li>
                <li>Use our content for educational purposes only</li>
              </ul>
            </div>

            <hr className="border-lime-300/30" />

            {/* Section 4 */}
            <div>
              <h3 className="text-2xl font-bold text-lime-300 mb-4">4. Disclaimer of Risk & Liability</h3>
              <p className="leading-relaxed mb-4">Wealth Flow is not liable for:</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Market volatility or financial losses</li>
                <li>Technical issues affecting trade execution</li>
                <li>Broker platform failures or third-party errors</li>
                <li>Unauthorized access to user data, despite security efforts</li>
              </ul>
              <p className="leading-relaxed mt-4">
                You agree to indemnify Wealth Flow against any claims related to your use of the Services.
              </p>
            </div>

            <hr className="border-lime-300/30" />

            {/* Section 5 */}
            <div>
              <h3 className="text-2xl font-bold text-lime-300 mb-4">5. Amendments</h3>
              <p className="leading-relaxed">
                Wealth Flow reserves the right to modify these Terms at any time. Changes take effect upon publication on our website. Continued use implies acceptance of updated Terms.
              </p>
            </div>

            <hr className="border-lime-300/30" />

            {/* Section 6 */}
            <div>
              <h3 className="text-2xl font-bold text-lime-300 mb-4">6. Governing Law</h3>
              <p className="leading-relaxed">
                These Terms are governed by the laws of [Insert Jurisdiction]. Disputes will be resolved in the courts of that jurisdiction.
              </p>
            </div>

            <hr className="border-lime-300/30 my-12" />

            {/* Privacy Policy */}
            <div className='mt-20'>
              <h2 className="text-3xl md:text-4xl font-bold text-lime-300 mb-8 text-center">PRIVACY POLICY</h2>
              
              {/* Privacy Section 1 */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-lime-300 mb-4">1. What Information We Collect</h3>
                <p className="leading-relaxed mb-4">When you interact with Wealth Flow, we may collect:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Full name and email address</li>
                  <li>Telegram or community usernames</li>
                  <li>IP address, device, and browser information</li>
                  <li>Broker account status (no access to funds)</li>
                  <li>Analytics data (via cookies or tracking tools)</li>
                </ul>
              </div>

              <hr className="border-lime-300/30 my-6" />

              {/* Privacy Section 2 */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-lime-300 mb-4">2. How We Use Your Data</h3>
                <p className="leading-relaxed mb-4">Your data may be used to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Provide access to Wealth Flow tools and services</li>
                  <li>Send trade alerts and educational materials</li>
                  <li>Improve our platform's performance and user experience</li>
                  <li>Communicate updates and important notices</li>
                  <li>Enforce these Terms and prevent abuse</li>
                </ul>
              </div>

              <hr className="border-lime-300/30 my-6" />

              {/* Privacy Section 3 */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-lime-300 mb-4">3. Data Sharing & Third Parties</h3>
                <p className="leading-relaxed mb-4">We do not sell your data. We may share limited data with:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Partner brokers (only with your permission)</li>
                  <li>CRM and cloud platforms (for account support)</li>
                  <li>Analytics tools (e.g., Google Analytics, Meta Pixel)</li>
                  <li>Legal authorities if required by law</li>
                </ul>
              </div>

              <hr className="border-lime-300/30 my-6" />

              {/* Privacy Section 4 */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-lime-300 mb-4">4. Data Security</h3>
                <p className="leading-relaxed">
                  Wealth Flow uses encryption, secure hosting, and access control to protect your information. However, no system is 100% secure. You acknowledge that you share data at your own risk.
                </p>
              </div>

              <hr className="border-lime-300/30 my-6" />

              {/* Privacy Section 5 */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-lime-300 mb-4">5. Cookies</h3>
                <p className="leading-relaxed mb-4">We use cookies to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Enhance your website experience</li>
                  <li>Track usage and improve content delivery</li>
                  <li>Personalize content</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  You can manage cookie preferences through your browser settings.
                </p>
              </div>

              <hr className="border-lime-300/30 my-6" />

              {/* Privacy Section 6 */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-lime-300 mb-4">6. Your Rights</h3>
                <p className="leading-relaxed mb-4">Depending on your jurisdiction, you may request to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Access your personal data</li>
                  <li>Delete or correct your information</li>
                  <li>Opt out of marketing communications</li>
                  <li>Request a portable copy of your data</li>
                </ul>
                <p className="leading-relaxed mt-4">
                  To exercise your rights, email us at wealthflowofficial@outlook.com
                </p>
              </div>

              <hr className="border-lime-300/30 my-6" />

              {/* Privacy Section 7 */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-lime-300 mb-4">7. Data Retention</h3>
                <p className="leading-relaxed">
                  We retain your data only as long as necessary to provide services or comply with legal obligations.
                </p>
              </div>

              <hr className="border-lime-300/30 my-6" />

              {/* Privacy Section 8 */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-lime-300 mb-4">8. Contact</h3>
                <p className="leading-relaxed">
                  For any questions regarding these Terms or our Privacy Policy, please contact us at{' '}
                  <a href="mailto:wealthflowofficial@outlook.com" className="text-lime-300 hover:underline">
                    wealthflowofficial@outlook.com
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Terms;