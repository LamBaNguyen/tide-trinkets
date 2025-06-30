import ProductCard from './ProductCard';
import products from '../data/products';

export default function ProductGallery() {
  return (
    <section id="gallery" className="bg-[#f0fbfa] py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#1F2F3F]">
          Bộ sưu tập sản phẩm
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              direction={index % 2 === 0 ? 'left' : 'right'}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
