import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotateX(-y * 0.1);
    setRotateY(x * 0.1);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120 } },
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: '1000px' }}
      className="h-full"
    >
      <motion.div
        style={{ rotateX, rotateY }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="bg-white/70 backdrop-blur-md rounded-2xl shadow-md overflow-hidden group h-full border border-white/40 hover:shadow-xl transition-shadow"
      >
        <div className="relative overflow-hidden h-56">
          <motion.img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700"
            animate={{ scale: isHovered ? 1.1 : 1 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
            className="absolute top-3 right-3 bg-accent-500 text-gray-900 text-xs font-bold px-3 py-1 rounded-full shadow"
          >
            {product.category}
          </motion.div>
        </div>
        <div className="p-5">
          <h3 className="text-xl font-heading font-semibold text-brand-950 mb-2 group-hover:text-brand-700 transition-colors">
            {product.name}
          </h3>
          <div className="flex justify-between items-center mb-4 text-sm text-gray-600">
            <span className="bg-gray-100 px-2 py-1 rounded-full">{product.screenSize}" Display</span>
            <span className="font-medium text-brand-700">{product.priceRange}</span>
          </div>
          <div className="flex space-x-3">
            <Link
              to={`/products/${product.slug}`}
              className="flex-1 text-center bg-brand-50 text-brand-700 hover:bg-brand-100 py-2 px-4 rounded-full text-sm font-medium transition-colors"
            >
              View Details
            </Link>
            <Link
              to={`/request-order?product=${product.slug}`}
              className="flex-1 text-center bg-accent-500 text-gray-900 hover:bg-accent-600 py-2 px-4 rounded-full text-sm font-medium transition-colors"
            >
              Request
            </Link>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}