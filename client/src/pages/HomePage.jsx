import HeroSection from '../components/home/HeroSection';
import FeaturedProducts from '../components/home/FeaturedProducts';
import { motion } from 'framer-motion';

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <FeaturedProducts />

      {/* Additional why choose us section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-heading font-bold text-brand-950">Why Choose ABC TV?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Global Manufacturing',
                desc: 'State-of-the-art facilities producing millions of units annually.',
                icon: '🏭',
              },
              {
                title: 'Reliable Distribution',
                desc: 'Fast, insured shipping to over 50 countries.',
                icon: '🚚',
              },
              {
                title: 'Quality Assurance',
                desc: 'Rigorous testing and 3-year warranty on all products.',
                icon: '✅',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="p-8 bg-white rounded-2xl shadow-md text-center"
              >
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-heading font-semibold text-brand-950 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-brand-950 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-heading font-bold mb-4">
            Ready to Partner with Us?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Whether you're a distributor or a business buyer, we're here to help you place your order.
          </p>
          <a href="/request-order" className="btn-accent inline-block">
            Request Your Order Now
          </a>
        </div>
      </section>
    </div>
  );
}