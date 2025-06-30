import { motion, useScroll, useTransform } from "framer-motion";

export default function WaterWaveTracker() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 800]);

  return (
    <motion.div
      style={{
        y,
        position: "absolute",
        top: 0,
        left: "50%",
        transform: "translateX(-50%)",
      }}
      className="hidden md:block w-[10px] z-10"
    >
      <svg
        viewBox="0 0 10 100"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-[140px]"
      >
        <path
          d="M5 0 C7 10, 3 20, 5 30 C7 40, 3 50, 5 60 C7 70, 3 80, 5 90 C7 95, 3 100, 5 110"
          stroke="#00BFFF"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
    </motion.div>
  );
}
