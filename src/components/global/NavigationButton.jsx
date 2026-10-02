import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
export default function NavigateButton({ route, buttonName, className }) {
  const navigate = useNavigate();
  return (
    <>
      <motion.button
        className={`text-white cursor-pointer whitespace-nowrap font-medium text-md md:text-xl ${className}`}
        onClick={() => navigate(route)}
      >
        {buttonName}
      </motion.button>
    </>
  );
}
