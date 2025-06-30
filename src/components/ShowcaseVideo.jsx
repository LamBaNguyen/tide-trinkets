import { motion } from 'framer-motion';

export default function ShowcaseVideo() {
  return (
    <section className="bg-[#fffdf6] py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          className="text-3xl font-bold mb-6 text-[#1F2F3F]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Hành trình từ đại dương đến bàn tay nghệ nhân
        </motion.h2>

        <motion.p
          className="text-gray-700 mb-8 text-lg"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
        >
          Mỗi sản phẩm từ vỏ ốc không chỉ mang vẻ đẹp của biển cả, mà còn là kết tinh của đôi bàn tay khéo léo và tâm huyết người làm nghề. 
        </motion.p>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="aspect-video rounded-xl overflow-hidden shadow-lg"
        >
          <video
            src="/video-shell.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
