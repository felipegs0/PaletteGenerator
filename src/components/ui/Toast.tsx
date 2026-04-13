import { motion } from "motion/react";
import { FaCheck } from "react-icons/fa";

function Toast() {
  return (
    <motion.div
      className="fixed bottom-5 right-5 bg-[#16A34A] text-white px-8 py-4 rounded-md shadow-lg"
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.25 }}
    >
      <div className="flex items-center gap-3">
        <FaCheck className="text-lg" />
        <p>Copiado com sucesso!</p>
      </div>
    </motion.div>
  );
}

export default Toast