"use client";

import { motion } from "framer-motion";
import { TypingText } from "../components";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| Acerca del Metaverso" textStyles="text-center" />

      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white"> El metaverso</span> es un
        término que se utiliza para hacer referencia a una realidad virtual
        compartida por varios usuarios. Es un espacio virtual que puede ser
        explorado y en el que se pueden llevar a cabo diversas actividades, como
        juegos, trabajos o reuniones.{" "}
        <span className="font-extrabold text-white">
          Algunas personas también
        </span>{" "}
        utilizan el término para referirse a una{" "}
        <span className="font-extrabold text-white">VR</span> en la que se
        pueden experimentar diferentes mundos o universos. El metaverso es un
        concepto que ha sido popularizado en la cultura popular a través de la
        <span className="font-extrabold text-white"> ciencia </span> ficción y
        ha sido explorado en libros, películas y videojuegos.
      </motion.p>

      <motion.img
        variants={fadeIn("up", "tween", 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
