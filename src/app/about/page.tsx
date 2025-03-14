"use client";

import { motion } from "framer-motion";

export default function About() {
  const skills = [
    { name: "2D Animation", level: 90 },
    { name: "3D Animation", level: 85 },
    { name: "Character Design", level: 88 },
    { name: "Motion Graphics", level: 92 },
    { name: "Storyboarding", level: 87 },
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
              I&apos;m a passionate animator with over 5 years of experience in
              creating compelling visual stories. My journey in animation began
              with a fascination for bringing characters to life and has evolved
              into a professional career crafting memorable experiences.
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
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-primary">{skill.level}%</span>
                </div>
                <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    className="h-full bg-primary rounded-full"
                  />
                </div>
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
          <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2>
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
          </div>
        </motion.div>
      </div>
    </div>
  );
}
