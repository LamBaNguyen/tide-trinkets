import { motion } from 'framer-motion';

export default function Intro() {
  return (
    <section id="intro" className="py-20 px-6 bg-[#FDF6EC] text-[#1F2F3F]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-4">Từ đại dương đến bàn tay nghệ nhân</h2>
          <p className="text-lg leading-relaxed">
            Chúng tôi mang hơi thở biển cả đến không gian sống của bạn qua những sản phẩm thủ công tinh xảo từ vỏ ốc tự nhiên. 
            Mỗi món đồ là một câu chuyện – được tạo nên bằng sự tỉ mỉ, cảm hứng và đam mê từ chính những nghệ nhân yêu biển.
          </p>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <img
            src="/intro-shell.jpg"
            alt="Nghệ nhân vỏ ốc"
            className="rounded-2xl shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
