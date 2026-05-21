import { motion, animate, useTransform, useMotionValue } from "motion/react";

export default function AnimatedCounter({ limit, duration = 2.5}) {
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
      <motion.p
        whileInView={countedNumber}
        viewport={{ once: true }}
        className="bg-linear-to-b tracking-wide from-[#AF761B] to-[#FFCC66] bg-clip-text text-transparent text-3xl md:text-5xl font-bold"
      >
        {roundedNumber}
      </motion.p>
    </>
  );
}
