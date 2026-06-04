import ProductGrid from '../components/product/ProductGrid';

export default function ProductListingPage() {
  return (
    <section className="py-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-brand-950">
            Our Television Lineup
          </h1>
          <p className="text-gray-600 mt-2">
            Browse our complete range of televisions, from LED to OLED.
          </p>
        </div>
        <ProductGrid />
      </div>
    </section>
  );
}