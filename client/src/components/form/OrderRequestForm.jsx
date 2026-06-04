import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useProducts } from '../../hooks/useProducts';
import { sendOrderRequest } from '../../lib/emailjs';
import { motion, AnimatePresence } from 'framer-motion';

const schema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().optional(),
  country: z.string().min(2, 'Country is required'),
  company: z.string().optional(),
  productName: z.string().optional(),
  quantity: z.coerce.number().min(1, 'Minimum 1').optional(),
  message: z.string().optional(),
});

export default function OrderRequestForm() {
  const [searchParams] = useSearchParams();
  const selectedSlug = searchParams.get('product');
  const { products } = useProducts();
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  useEffect(() => {
    if (selectedSlug && products.length > 0) {
      const product = products.find((p) => p.slug === selectedSlug);
      if (product) setValue('productName', product.name);
    }
  }, [selectedSlug, products, setValue]);

  const onSubmit = async (data) => {
    setLoading(true);
    const result = await sendOrderRequest(data);
    setLoading(false);
    setStatus(result.success ? 'success' : 'error');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-md rounded-2xl shadow-xl p-8 md:p-10 border border-white/40">
      <h2 className="text-2xl font-heading font-bold text-brand-950 mb-6 text-center">
        Request an Order / Quotation
      </h2>

      <AnimatePresence>
        {status === 'success' && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded-xl flex items-center space-x-3"
          >
            <span className="text-2xl">🎉</span>
            <div>
              <p className="font-medium">Thank you! Your request has been sent.</p>
              <p className="text-sm">Our sales team will respond within 24 hours.</p>
            </div>
          </motion.div>
        )}
        {status === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 rounded-xl"
          >
            Something went wrong. Please try again or email us directly.
          </motion.div>
        )}
      </AnimatePresence>

      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        {/* Fields remain the same as before, with minor styling tweaks */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
          <motion.input
            whileFocus={{ scale: 1.02 }}
            {...register('fullName')}
            className="w-full rounded-xl border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 transition-transform"
          />
          {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>}
        </div>
        {/* ... repeat for all fields with whileFocus effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
            <motion.input whileFocus={{ scale: 1.02 }} type="email" {...register('email')} className="w-full rounded-xl border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500" />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
            <motion.input whileFocus={{ scale: 1.02 }} {...register('phone')} className="w-full rounded-xl border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500" />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Country *</label>
            <motion.input whileFocus={{ scale: 1.02 }} {...register('country')} className="w-full rounded-xl border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500" />
            {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Company (optional)</label>
            <motion.input whileFocus={{ scale: 1.02 }} {...register('company')} className="w-full rounded-xl border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Product of Interest</label>
          <motion.select whileFocus={{ scale: 1.02 }} {...register('productName')} className="w-full rounded-xl border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500">
            <option value="">-- Select a product --</option>
            {products.map((p) => (
              <option key={p.id} value={p.name}>{p.name}</option>
            ))}
          </motion.select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Quantity</label>
          <motion.input whileFocus={{ scale: 1.02 }} type="number" min="1" {...register('quantity')} className="w-full rounded-xl border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500" />
          {errors.quantity && <p className="text-red-500 text-sm mt-1">{errors.quantity.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Additional Message / Requirements</label>
          <motion.textarea whileFocus={{ scale: 1.02 }} rows={4} {...register('message')} className="w-full rounded-xl border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500"></motion.textarea>
        </div>
        <motion.button
          type="submit"
          disabled={loading}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full btn-primary text-lg py-3 disabled:opacity-70 bg-gradient-to-r from-brand-700 to-brand-600 hover:from-brand-800 hover:to-brand-700"
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          ) : (
            'Submit Request'
          )}
        </motion.button>
      </motion.form>
    </div>
  );
}