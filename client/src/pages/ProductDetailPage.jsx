import { useParams, Link } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';
import ImageGallery from '../components/product/ImageGallery';
import SpecsTable from '../components/product/SpecsTable';
import { motion } from 'framer-motion';

export default function ProductDetailPage() {
  const { slug } = useParams();
  const { products } = useProducts();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <div className="py-20 text-center text-gray-500">
        Product not found.
      </div>
    );
  }

  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-6">
          <Link to="/" className="hover:text-brand-700">Home</Link> /{' '}
          <Link to="/products" className="hover:text-brand-700">Products</Link> /{' '}
          <span className="text-gray-800">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ImageGallery images={product.images} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-6">
              <div>
                <span className="inline-block bg-brand-100 text-brand-800 text-xs font-bold px-3 py-1 rounded-full mb-2">
                  {product.category}
                </span>
                <h1 className="text-3xl md:text-4xl font-heading font-bold text-brand-950">
                  {product.name}
                </h1>
                <p className="text-lg text-brand-700 font-semibold mt-2">
                  {product.priceRange}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-brand-950 mb-2">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <span className="text-accent-500 mt-1">✦</span>
                      <span className="text-gray-700">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <SpecsTable product={product} />

              <Link
                to={`/request-order?product=${product.slug}`}
                className="btn-primary w-full text-center block mt-8"
              >
                Request This Product
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}