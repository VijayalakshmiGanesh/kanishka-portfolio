"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  return (
    <div ref={containerRef} className="relative ">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div
          style={{ opacity, scale }}
          className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary-dark/20 dark:from-primary/10 dark:to-primary-dark/10"
        >
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                "radial-gradient(circle at 0% 0%, rgba(255,134,188,0.2) 0%, transparent 50%)",
                "radial-gradient(circle at 100% 100%, rgba(255,134,188,0.2) 0%, transparent 50%)",
                "radial-gradient(circle at 0% 100%, rgba(255,134,188,0.2) 0%, transparent 50%)",
                "radial-gradient(circle at 100% 0%, rgba(255,134,188,0.2) 0%, transparent 50%)",
              ],
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </motion.div>

        <div className="container spacing mx-auto px-4 z-10 pt-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* <motion.span
                className="absolute -top-8 -left-8 text-5xl"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                ✨
              </motion.span> */}
              <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="block bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent"
                >
                  Art is my
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="block"
                >
                  Caffeine
                </motion.span>
              </h1>
              {/* <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8"
              >
                Creating captivating animated experiences that leave lasting
                impressions
              </motion.p> */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 }}
                className="flex gap-4"
              >
                <Link href="/works">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-medium transition-colors"
                  >
                    View My Work
                  </motion.button>
                </Link>
                <Link href="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border-2 border-primary hover:bg-primary/10 text-primary px-8 py-4 rounded-full font-medium transition-colors"
                  >
                    Contact Me
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] lg:h-[600px] col-span-2"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent overflow-hidden">
                {/* <video
                  src="/assets/videos/herobanner.mp4"
                  className="w-full h-full"
                  controls={false}
                  controlsList="nodownload"
                  autoPlay={true}
                  loop={true}
                  muted
                /> */}
                <iframe
                  title="show reel"
                  src="https://drive.google.com/file/d/1seyQt9SpsAmrB5J-HAwwrxq0EG2qaQ-e/preview"
                  width="640"
                  height="480"
                  allow="autoplay"
                  className="w-full h-full lg:h-[65vh]"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
            <motion.div
              className="w-1 h-1 bg-primary rounded-full"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </section>

      {/* Featured Works Section */}
      <section className="py-20 bg-gray-50 dark:bg-[#121212]/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Featured Works
            </h2>
            <motion.div
              className="w-20 h-1 bg-primary mx-auto"
              whileInView={{ scaleX: [0, 1] }}
              viewport={{ once: true }}
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "1xgt5xfqLPeWuN1jUOT5JGQGcMCqFfshj",
              "16S-uaijsVPMci04CPiyAeEUHnJ82aS4P",
              "1xywb5p1CVsBLKIbIU7jLI7s9Ry3JAOBk",
              "16X2sRNRlPDLBOUcb5DP4rS2aI1WnG_W5",
              "16XVSS-vTd_JdD6zXvyDamQ-5weM8tL_K",
              "16XfIupmiynjF8kMgA67e-uZP3RhtwMag",
              "16dGELqv_A8cx9o3tn4vBgIzWY8lgH8bu",
              "16OU-9FKBg5Fc6dalONUF_otTn_B_e5jB",
              "1y3C2HGtx7QEEdiUhQ2v35LRbQkShw_eN",
            ].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group relative aspect-auto h-[400px] w-full md:width-[400px] bg-white dark:bg-[#121212] overflow-hidden shadow-lg"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Image
                  alt="featured post "
                  className="absolute inset-0 object-cover"
                  src={`https://drive.google.com/uc?export=view&id=${item}`}
                  fill
                />
                {/* <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold text-white mb-2">
                    Project Title
                  </h3>
                  <p className="text-gray-200">
                    Brief description of the animation project
                  </p>
                </div> */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Expertise</h2>
            <motion.div
              className="w-20 h-1 bg-primary mx-auto"
              whileInView={{ scaleX: [0, 1] }}
              viewport={{ once: true }}
            />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              "2D Animation",
              "3D Animation",
              "Character Design",
              "Motion Graphics",
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group text-center"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <motion.span
                    className="text-primary text-2xl"
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    ✦
                  </motion.span>
                </div>
                <h3 className="font-bold mb-2">{skill}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}
    </div>
  );
}
