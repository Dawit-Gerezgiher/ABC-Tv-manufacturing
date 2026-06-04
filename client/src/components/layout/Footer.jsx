import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative bg-brand-950 text-white overflow-hidden">
      {/* Wave separator */}
      <div className="absolute top-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-full h-12 md:h-16"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          ></path>
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-heading font-bold mb-4">
              ABC<span className="text-accent-500">TV</span>
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Leading manufacturer of advanced television sets, delivering
              cutting-edge viewing experiences to customers worldwide.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-accent-400">
              Quick Links
            </h4>
            <ul className="space-y-2 text-gray-300">
              {['Home', 'Products', 'About Us', 'Request Order'].map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="hover:text-white transition-colors inline-block hover:translate-x-1 transform duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-accent-400">
              Contact Info
            </h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center space-x-2 group cursor-default">
                <FaMapMarkerAlt className="text-accent-500 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-white transition-colors">123 Industrial Zone, Tech City, Country</span>
              </div>
              <div className="flex items-center space-x-2 group cursor-default">
                <FaPhoneAlt className="text-accent-500 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-white transition-colors">+123 456 7890</span>
              </div>
              <div className="flex items-center space-x-2 group cursor-default">
                <FaEnvelope className="text-accent-500 group-hover:scale-110 transition-transform" />
                <span className="group-hover:text-white transition-colors">sales@abctelevisions.com</span>
              </div>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-brand-800 mt-8 pt-8 text-center text-gray-400 text-sm"
        >
          &copy; {new Date().getFullYear()} ABC Television Manufacturing Co. All rights reserved.
        </motion.div>
      </div>
    </footer>
  );
}