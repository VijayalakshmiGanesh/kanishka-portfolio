"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useTheme } from "./ThemeProvider";

const navItems = [
  { name: "Home", path: "/" },
  { name: "Works", path: "/works" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 dark:bg-[#121212]/80 backdrop-blur-lg shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex-shrink-0"
            >
              <Link href="/" className="flex items-center space-x-2">
                <motion.div
                  className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-white font-bold text-xl overflow-hidden relative group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary via-primary-dark to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    animate={{ x: ["0%", "100%"], opacity: [0, 1, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <span className="relative z-10">K</span>
                </motion.div>
                <div className="flex flex-col items-center">
                  <span className="text-xl font-bold bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
                    PINK FAIRY
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    Animator & Visual artist
                  </span>
                </div>
              </Link>
            </motion.div>

            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.path}
                    className="relative px-3 py-2 text-sm font-medium transition-colors group"
                  >
                    <span
                      className={`relative z-10 ${
                        pathname === item.path
                          ? "text-primary dark:text-primary"
                          : "text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      {item.name}
                    </span>
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                      animate={
                        pathname === item.path ? { scaleX: 1 } : { scaleX: 0 }
                      }
                    />
                  </Link>
                </motion.div>
              ))}

              <motion.button
                onClick={toggleTheme}
                className="relative w-12 h-6 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute w-5 h-5 rounded-full bg-primary top-0.5 left-0.5"
                  animate={{ x: theme === "dark" ? 24 : 0 }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                >
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center text-white text-xs"
                    animate={{ rotate: theme === "dark" ? 360 : 0 }}
                  >
                    {theme === "dark" ? "🌙" : "☀️"}
                  </motion.div>
                </motion.div>
              </motion.button>
            </nav>

            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center"
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex flex-col items-center justify-center w-6 h-6">
                <motion.span
                  animate={
                    isMenuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }
                  }
                  className="w-full h-0.5 bg-gray-800 dark:bg-white rounded-full transition-transform origin-center"
                />
                <motion.span
                  animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="w-full h-0.5 bg-gray-800 dark:bg-white rounded-full my-1.5"
                />
                <motion.span
                  animate={
                    isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
                  }
                  className="w-full h-0.5 bg-gray-800 dark:bg-white rounded-full transition-transform origin-center"
                />
              </div>
            </motion.button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 20 }}
            className="fixed inset-0 z-30 md:hidden bg-white dark:bg-[#121212]"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.path}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-2xl font-medium ${
                      pathname === item.path
                        ? "text-primary"
                        : "text-gray-800 dark:text-gray-200"
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.button
                onClick={toggleTheme}
                className="mt-8 px-6 py-3 rounded-full bg-primary text-white font-medium"
                whileTap={{ scale: 0.95 }}
              >
                {theme === "dark" ? "Switch to Light" : "Switch to Dark"}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
