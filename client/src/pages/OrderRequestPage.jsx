import OrderRequestForm from '../components/form/OrderRequestForm';
import { motion } from 'framer-motion';

export default function OrderRequestPage() {
  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-brand-950">
            Request an Order
          </h1>
          <p className="text-gray-600 mt-3 max-w-xl mx-auto">
            Fill in the form below and our sales team will respond with a detailed quotation and next steps.
          </p>
        </motion.div>
        <OrderRequestForm />
      </div>
    </section>
  );
}