"use client";

import { motion } from "framer-motion";

export default function About() {
  const skills = [
    { name: "2D Animation", level: 90 },
    { name: "Visual Art", level: 85 },
    { name: "Stop Motion", level: 88 },
    { name: "Motion Graphics", level: 92 },
    { name: "3D Drawing", level: 87 },
  ];

  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                About Me
              </span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
              I&apos;m an artist with experience in both traditional and digital
              techniques, currently focusing on the creative industries of
              animation and visual arts.
            </p>
            <div className="flex gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full font-medium transition-colors"
              >
                Download Resume
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-primary hover:bg-primary/10 text-primary px-6 py-3 rounded-full font-medium transition-colors"
              >
                Contact Me
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent" />
            {/* Replace with your profile image */}
            <div className="w-full h-full bg-gray-200 dark:bg-gray-800" />
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 md:w-3/4 2xl:w-1/2 mx-auto"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-stretch">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group text-center flex gap-8 items-center"
              >
                <div className="mx-0 h-20 mb-4 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
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
                <h3 className="font-bold mb-2">{skill.name}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          {/* <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
          <div className="space-y-8">
            {[1, 2, 3].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary">✦</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">Senior Animator</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-2">
                      Animation Studio • 2020 - Present
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Led animation projects for major clients, mentored junior
                      animators, and implemented new animation techniques.
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div> */}
        </motion.div>
      </div>
    </div>
  );
}
