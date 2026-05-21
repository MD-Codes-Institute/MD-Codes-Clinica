import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
export default function NavigateButton({ route, buttonName }) {
  const navigate = useNavigate();
  return (
    <>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="text-white cursor-pointer whitespace-nowrap font-medium text-md md:text-xl"
        onClick={() => navigate(route)}
      >
        {buttonName}
      </motion.button>
    </>
  );
}
