import { motion } from "framer-motion";

export default function AnimatedSection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.25, // delay between items
      },
    },
  };

  const itemVariants = {
    hidden: {
      x: 200,
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.2,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <>
      <motion.div
        className="flex flex-col gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.4 }}
      >
        <motion.div
          variants={itemVariants}
          className="w-60 h-24 bg-red-500 text-white flex items-center justify-center rounded-lg"
        >
          ITEM 1
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="w-60 h-24 bg-red-500 text-white flex items-center justify-center rounded-lg"
        >
          ITEM 2
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="w-60 h-24 bg-red-500 text-white flex items-center justify-center rounded-lg"
        >
          ITEM 3
        </motion.div>
      </motion.div>
      <div className="flex justify-between items-center min-h-screen px-20 overflow-hidden">
        {/* LEFT ELEMENT */}
        <motion.div
          initial={{ x: -200, rotate: -100, opacity: 0 }}
          whileInView={{ x: 0, rotate: 0, opacity: 1 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          viewport={{
            amount: 0.2, // how much should be visible to trigger
          }}
          className="w-72 h-72 bg-blue-500 text-white flex items-center justify-center text-xl rounded-xl"
        >
          LEFT
        </motion.div>

        {/* RIGHT ELEMENT */}
        <motion.div
          initial={{ x: 200, rotate: 100, opacity: 0 }}
          whileInView={{ x: 0, rotate: 0, opacity: 1 }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
          viewport={{
            amount: 0.2,
          }}
          className="w-72 h-72 bg-red-500 text-white flex items-center justify-center text-xl rounded-xl"
        >
          RIGHT
        </motion.div>
      </div>
    </>
  );
}
