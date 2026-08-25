import { motion, animate, useTransform, useMotionValue } from "motion/react";

export default function AnimatedCounter({ limit, duration = 2.5, className }) {
  const count = useMotionValue(0);
  const roundedNumber = useTransform(count, (latest) => Math.round(latest));
  const countedNumber = () => {
    animate(count, limit, {
      duration: duration,
      ease: "easeOut",
    });
  };
  return (
    <>
      <motion.span
        whileInView={countedNumber}
        viewport={{ once: true }}
        className={`bg-linear-to-b tracking-wide from-[#AF761B] to-[#FFCC66] bg-clip-text text-transparent font-bold ${className}`}
      >
        {roundedNumber}
      </motion.span>
    </>
  );
}
