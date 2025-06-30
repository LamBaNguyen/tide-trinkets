import { motion } from "framer-motion";

export default function ProductCard({ product, direction = "left" }) {
  const variants = {
    hidden: { opacity: 0, x: direction === "left" ? -50 : 50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      className="bg-white shadow-md rounded-xl overflow-hidden"
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 0.7 }}
      viewport
      variants={variants}
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-56 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm">{product.description}</p>
      </div>
    </motion.div>
  );
}
