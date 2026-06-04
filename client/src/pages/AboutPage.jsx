import { motion } from 'framer-motion';
import img1 from "./tv11.jpeg"


export default function AboutPage() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-heading font-bold text-brand-950 mb-4">About ABC Television</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are a global leader in television manufacturing, dedicated to innovation, quality, and customer satisfaction.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={img1}
              alt="Manufacturing Facility"
              className="rounded-2xl shadow-xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-2xl font-heading font-bold text-brand-950">Our Story</h2>
            <p className="text-gray-700 leading-relaxed">
              Founded in 2005, ABC Television started as a small assembly unit and has grown into one of the largest TV manufacturers in the region. Our state-of-the-art facility spans over 500,000 square feet and employs over 2,000 skilled workers.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We export to over 50 countries, providing tailored solutions for distributors, retailers, and corporate clients. Our commitment to research and development keeps us at the forefront of display technology.
            </p>
          </motion.div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 md:p-12 mb-16">
          <h2 className="text-2xl font-heading font-bold text-brand-950 mb-6 text-center">Our Core Values</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Innovation', 'Quality', 'Reliability', 'Customer Focus'].map((val, idx) => (
              <div key={idx} className="text-center p-4">
                <div className="text-3xl mb-2">⭐</div>
                <h3 className="font-semibold text-brand-950">{val}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-heading font-bold text-brand-950 mb-6">Get in Touch</h2>
            <div className="space-y-4 text-gray-700">
              <p><strong>Address:</strong> 123 Industrial Zone, Tech City, Country</p>
              <p><strong>Phone:</strong> +123 456 7890</p>
              <p><strong>Email:</strong> sales@abctelevisions.com</p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="Google Map"
              className="w-full h-64"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?q=Industrial%20Zone%2C%20Tech%20City&t=&z=13&ie=UTF8&iwloc=&output=embed"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}