"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type MediaItem = {
  id: string;
  type: "image" | "video";
  src: string;
  thumbnail: string;
  title: string;
  description: string | React.ReactElement;
  category: string;
  subcategory: string;
};

export default function Gallery({ items }: { items: MediaItem[] }) {
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {items.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="relative aspect-square cursor-pointer group"
            onClick={() => setSelectedItem(item)}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
            {item.type === "image" ? (
              <Image
                src={item.thumbnail}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading="lazy"
              />
            ) : (
              <iframe
                title={item.title}
                src={item.src}
                width="auto"
                height="auto"
                allow="autoplay"
                className="w-full h-full"
              />
            )}
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
              <h3 className="text-lg font-bold">{item.title}</h3>
              {item.description && (
                <p className="text-sm">{item.description}</p>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {selectedItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedItem(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            {selectedItem.type === "image" ? (
              <Image
                src={selectedItem.src}
                alt={selectedItem.title}
                width={1200}
                height={800}
                className="object-contain w-full h-[75dvh]"
                priority
              />
            ) : (
              <iframe
                title={selectedItem.title}
                src={selectedItem.src}
                width="640"
                height="700"
                allow="autoplay"
                className="w-full h-[75dvh]"
              ></iframe>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
}
