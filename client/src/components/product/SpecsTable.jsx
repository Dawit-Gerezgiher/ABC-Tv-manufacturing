export default function SpecsTable({ product }) {
  const specs = [
    { label: 'Screen Size', value: `${product.screenSize}"` },
    { label: 'Resolution', value: product.resolution },
    { label: 'Display Technology', value: product.display },
    { label: 'Smart TV', value: product.smartTV },
    { label: 'Connectivity', value: product.connectivity },
    { label: 'Audio', value: product.audio },
    { label: 'Dimensions (w/o stand)', value: product.dimensions },
    { label: 'Weight', value: product.weight },
    { label: 'Price Range', value: product.priceRange },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200">
      <table className="w-full">
        <tbody>
          {specs.map((spec, idx) => (
            <tr key={idx} className="border-b last:border-0 hover:bg-gray-50">
              <td className="py-3 px-4 font-medium text-gray-700 bg-gray-50 w-1/3">
                {spec.label}
              </td>
              <td className="py-3 px-4 text-gray-600">{spec.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}