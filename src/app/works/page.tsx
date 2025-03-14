"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Gallery from "@/components/Gallery";
import { workItems } from "./data";

const categories = {
  all: {
    name: "All Works",
    subcategories: [],
  },
  animation: {
    name: "Animation",
    subcategories: ["Digital 2D", "Traditional 2D", "Stop Motion", "Projects"],
  },
  "painting-drawing": {
    name: "Painting & Drawing",
    subcategories: [
      "Brush Strokes",
      "Digital Paintings",
      "Pencil Strokes",
      "3D Drawings",
    ],
  },
  "couture-design": {
    name: "Couture Design",
    subcategories: [],
  },
  "portrait-character": {
    name: "Portrait & Character",
    subcategories: ["Imaginary Faces", "Portraiture", "Character Drawings"],
  },
  craft: {
    name: "Craft",
    subcategories: ["Resin Art", "Clay Art", "Cards"],
  },
};

export default function Works() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedSubcategory, setSelectedSubcategory] = useState("");

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setSelectedSubcategory("");
  };

  const filteredItems = workItems.filter((item) => {
    if (selectedCategory === "all") return true;
    if (selectedSubcategory) {
      return (
        item.category === selectedCategory &&
        item.subcategory === selectedSubcategory
      );
    }
    return item.category === selectedCategory;
  });

  return (
    <div className="min-h-screen pt-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent">
              My Works
            </span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Explore my creative journey through various mediums
          </p>
        </motion.div>

        {/* Main Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-8"
        >
          {Object.entries(categories).map(([key, category]) => (
            <motion.button
              key={key}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === key
                  ? "bg-primary text-white shadow-lg shadow-primary/30"
                  : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              }`}
              onClick={() => handleCategoryChange(key)}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Subcategories */}
        <AnimatePresence mode="wait">
          {selectedCategory !== "all" &&
            categories[selectedCategory].subcategories.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="flex flex-wrap justify-center gap-3 mb-12"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    !selectedSubcategory
                      ? "bg-primary/20 text-primary font-medium"
                      : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                  onClick={() => setSelectedSubcategory("")}
                >
                  All {categories[selectedCategory].name}
                </motion.button>
                {categories[selectedCategory].subcategories.map(
                  (subcategory) => (
                    <motion.button
                      key={subcategory}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`px-4 py-2 rounded-full text-sm transition-colors ${
                        selectedSubcategory === subcategory
                          ? "bg-primary/20 text-primary font-medium"
                          : "bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"
                      }`}
                      onClick={() => setSelectedSubcategory(subcategory)}
                    >
                      {subcategory}
                    </motion.button>
                  )
                )}
              </motion.div>
            )}
        </AnimatePresence>

        {/* Gallery */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${selectedCategory}-${selectedSubcategory}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <Gallery items={filteredItems} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
