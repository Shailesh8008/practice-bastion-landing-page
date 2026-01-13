import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useScrollDirection } from "../hooks/useScrollDirection";

interface TestimonialProps {
  name: string;
  title: string;
  quote: string;
}

const containerVariants: Variants = {
  hidden: {},
  visible: (direction: "up" | "down") => ({
    transition: {
      staggerChildren: 0.2,
      staggerDirection: direction === "up" ? -1 : 1,
    },
  }),
};

const itemVariants: Variants = {
  hidden: {
    x: 300,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: "easeOut",
    },
  },
};

const Testimonial: React.FC<TestimonialProps> = ({ name, title, quote }) => (
  <motion.div
    variants={itemVariants}
    className="relative overflow-hidden rounded-[2rem] px-6 py-4 flex flex-col md:flex-row gap-8 z-50"
  >
    <div className="absolute top-0 left-0 w-full h-full bg-white opacity-50 -z-10"></div>
    <div className="md:w-1/3 self-center">
      <h4 className="text-2xl font-black text-gray-900 leading-snug">
        {name}, {title}
      </h4>
    </div>
    <div className="md:w-2/3">
      <p className="text-blue-900 text-xl leading-relaxed">{quote}</p>
    </div>
  </motion.div>
);

export const Testimonials: React.FC = () => {
  const direction = useScrollDirection();

  const reviews = [
    {
      name: "Krishna Appala",
      title: "Fundmanager at Capital Mind PMS",
      quote:
        "I have known Navid and the Bastion team for many years now, and they have been truly stupendous throughout. In a world filled with surface-level commentary, they are the ones I genuinely look up to for core, fundamental research.",
    },
    {
      name: "Siddharth Mandalaywala",
      title: "Fundmanager at Concept Investwell PMS",
      quote:
        "Bastion Research has truly set a high benchmark in the field of equity research and market intelligence. Their deep-dive analyses, consistent accuracy, and forward-looking insights make them stand out in a crowded space.",
    },
    {
      name: "Ashish Kumar Sahu",
      title: "Subscriber, Bastion CORE",
      quote:
        "Your research is very in-depth, and I typically prioritize reading it as soon as it is published. I appreciate your research, which was published at a very early stage when no one else had recognized its potential.",
    },
  ];

  return (
    <section className="py-10 px-6 md:px-10 relative">
      <div className="absolute top-0 left-0 w-full h-full">
        <img
          src={`${import.meta.env.BASE_URL}images/handshake1.jpg`}
          alt="handshake"
          className="w-full h-full"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-red-600 opacity-55"></div>
      </div>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-26">
        <div className="relative lg:w-1/4 flex flex-col">
          <h2 className="text-[3.5rem] font-black text-white leading-tight mt-8 ml-6 text-center lg:text-start">
            What our
            <br />
            Readers
            <br />
            Say...
          </h2>
          <div className="lg:absolute lg:bottom-0 w-56 sm:w-[22rem] mx-auto lg:mx-0 mt-10">
            <img
              src={`${import.meta.env.BASE_URL}images/like.png`}
              alt="Like Image"
              className="w-full"
            />
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          custom={direction}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
          className="lg:w-8/12 flex flex-col gap-9"
        >
          {reviews.map((rev, i) => (
            <Testimonial key={i} {...rev} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};
