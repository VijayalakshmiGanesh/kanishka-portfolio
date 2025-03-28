"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { footerLinks } from "./Footer/footer";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative pt-32 pb-8 overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 z-0">
        <motion.div
          className="absolute inset-0 opacity-30 dark:opacity-20"
          animate={{
            backgroundImage: [
              "radial-gradient(circle at 0% 0%, var(--tw-colors-primary) 0%, transparent 50%)",
              "radial-gradient(circle at 100% 100%, var(--tw-colors-primary) 0%, transparent 50%)",
              "radial-gradient(circle at 0% 100%, var(--tw-colors-primary) 0%, transparent 50%)",
              "radial-gradient(circle at 100% 0%, var(--tw-colors-primary) 0%, transparent 50%)",
            ],
          }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center space-x-2"
            >
              <motion.div
                className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white font-bold text-xl overflow-hidden relative group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute p-4 inset-0 bg-gradient-to-r from-primary via-primary-dark to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{ x: ["0%", "100%"], opacity: [0, 1, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <Image
                  src="/assets/images/logo-white.png"
                  height={32}
                  width={32}
                  className="relative z-10 "
                  alt="pinkfairy logo"
                />
              </motion.div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                PINKFAIRY
              </span>
            </motion.div>
            <p className="text-gray-600 dark:text-gray-400">
              Art is my caffeine
            </p>
          </div>

          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg font-semibold mb-4"
            >
              Quick Links
            </motion.h3>
            <ul className="space-y-2">
              {["Home", "Works", "About", "Contact"].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                  >
                    {item}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg font-semibold mb-4"
            >
              Services
            </motion.h3>
            <ul className="space-y-2">
              {[
                "2D Animation",
                "Character Design",
                "Stop Motion",
                "Painting",
                "Craftwork",
              ].map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-gray-600 dark:text-gray-400"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg font-semibold mb-4"
            >
              Connect
            </motion.h3>
            <div className="flex flex-wrap gap-4">
              {footerLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors"
                >
                  <Image
                    src={`/assets/icons/${social.name}.svg`}
                    width={32}
                    height={32}
                    alt={social.name}
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-600 dark:text-gray-400"
        >
          <p>© {new Date().getFullYear()} Kanishka. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
