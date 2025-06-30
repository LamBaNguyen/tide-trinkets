import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaFacebook, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Đang gửi...");

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, formData, PUBLIC_KEY)
      .then(() => {
        setStatus("Gửi thành công!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setStatus("Đã có lỗi xảy ra. Vui lòng thử lại.");
      });
  };

  return (
    <section className="bg-[#e9f8f8] py-20 px-6" id="contact">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
        {/* Form */}
        <motion.form
          className="bg-white p-6 rounded-xl shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl font-bold mb-4 text-[#1F2F3F]">
            Liên hệ với chúng tôi
          </h2>
          <input
            type="text"
            name="name"
            placeholder="Họ và tên"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border p-3 mb-4 rounded-lg"
          />
          <input
            type="email"
            name="email"
            placeholder="Email của bạn"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border p-3 mb-4 rounded-lg"
          />
          <textarea
            name="message"
            placeholder="Lời nhắn / Yêu cầu"
            value={formData.message}
            onChange={handleChange}
            required
            rows="4"
            className="w-full border p-3 mb-4 rounded-lg"
          />
          <button
            type="submit"
            className="bg-[#007B8A] text-white px-6 py-3 rounded-lg hover:bg-[#005f6a] transition"
          >
            Gửi liên hệ
          </button>
          {status && <p className="mt-4 text-sm text-gray-600">{status}</p>}
        </motion.form>

        {/* Info & social */}
        <motion.div className="flex flex-col justify-center text-[#1F2F3F]">
          <h3 className="text-xl font-bold mb-4">Kết nối với chúng tôi</h3>
          <p className="mb-3 flex items-center gap-2">
            <FaEnvelope /> contact@voshells.vn
          </p>
          <p className="mb-3 flex items-center gap-2">
            <FaPhoneAlt /> Zalo: 0909 123 456
          </p>
          <p className="mb-3 flex items-center gap-2">
            <FaFacebook /> fb.com/voshells
          </p>
        </motion.div>
      </div>
    </section>
  );
}
