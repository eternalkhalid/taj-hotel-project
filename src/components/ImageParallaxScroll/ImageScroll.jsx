"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import { useTransform, useScroll, motion } from "framer-motion";
import module from "./imagescroll.module.scss";
import Link from "next/link";

import img1 from "@/assets/parallax/p1.jpg";
import img2 from "@/assets/parallax/p2.jpg";
import img3 from "@/assets/parallax/p3.jpg";
import img4 from "@/assets/parallax/p4.jpg";
import img5 from "@/assets/parallax/p5.jpg";
import img6 from "@/assets/parallax/p6.jpg";
import img7 from "@/assets/parallax/p7.jpg";
import img8 from "@/assets/parallax/p8.jpg";
import img9 from "@/assets/parallax/p9.jpg";
import img10 from "@/assets/parallax/p10.jpg";
import img11 from "@/assets/parallax/p11.jpg";
import img12 from "@/assets/parallax/p12.jpg";
import CustomButton from "../customButton/CustomButton";

const images = [
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
];

export default function ImageScroll() {
  const gallery = useRef(null);
  const [dimension, setDimension] = useState({ width: 0, height: 0 });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <>
      <main className={module.main__image__parallax}>
        <h1>Gallery</h1>
        <div className={module.spacer}></div>
        <div ref={gallery} className={module.parallax__gallery}>
          <Column images={[images[0], images[1], images[2]]} y={y} />
          <Column images={[images[3], images[4], images[5]]} y={y2} />
          <Column images={[images[6], images[7], images[8]]} y={y3} />
          <Column images={[images[9], images[10], images[11]]} y={y4} />
        </div>
        <div className={module.spacer}></div>
      </main>
      <div className={module.explore__more__parent}>
        <CustomButton href={"/gallery"}>Explore More</CustomButton>
      </div>
    </>
  );
}

const Column = ({ images, y }) => {
  return (
    <motion.div className={module.parallax__column} style={{ y }}>
      {images.map((src, i) => {
        return (
          <div key={i} className={module.imageContainer}>
            <Image src={src} alt="image" fill />
          </div>
        );
      })}
    </motion.div>
  );
};
