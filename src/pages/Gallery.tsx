import { motion } from "motion/react";
import { IMAGES } from "@/constants/images";

export default function Gallery() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold text-primary mb-6">School Life in Pictures</h1>
          <p className="text-xl text-muted-foreground">
            A glimpse into the daily activities, events, and achievements at Mountain Movers Junior School.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {IMAGES.GALLERY.map((src, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="aspect-square rounded-2xl overflow-hidden shadow-md group relative"
            >
              <img 
                src={src} 
                alt={`Gallery image ${i + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-bold border-2 border-white px-4 py-2 rounded-full">View Large</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
