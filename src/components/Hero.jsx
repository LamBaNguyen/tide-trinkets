import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-screen flex flex-col justify-center items-center text-white bg-[url('/hero-shell.png')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>

      <motion.div 
        className="relative z-10 text-center px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Vẻ đẹp từ đại dương</h1>
        <p className="text-xl md:text-2xl mb-8">Nghệ thuật từ vỏ ốc biển</p>
        <a href="#intro" className="text-white border border-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition">Khám phá ngay</a>
      </motion.div>
    </section>
  );
}
