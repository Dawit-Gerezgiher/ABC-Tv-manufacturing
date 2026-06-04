import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Modal from '../ui/Modal';

export default function ImageGallery({ images }) {
  const [selected, setSelected] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="space-y-4">
        <motion.div
          className="relative rounded-2xl overflow-hidden bg-gray-100 cursor-pointer group"
          onClick={() => setIsModalOpen(true)}
          whileHover={{ scale: 1.02 }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={selected}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              src={images[selected]}
              alt={`Product view ${selected + 1}`}
              className="w-full h-80 object-contain p-4"
            />
          </AnimatePresence>
          <div className="absolute top-3 left-3 bg-black/40 text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            Click to enlarge
          </div>
        </motion.div>
        <div className="flex space-x-3 overflow-x-auto pb-2">
          {images.map((img, idx) => (
            <motion.button
              key={idx}
              onClick={() => setSelected(idx)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${
                idx === selected
                  ? 'border-brand-700 shadow-md ring-2 ring-brand-300'
                  : 'border-transparent hover:border-gray-300'
              }`}
            >
              <img
                src={img}
                alt={`Thumbnail ${idx + 1}`}
                className="w-20 h-20 object-cover"
              />
            </motion.button>
          ))}
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <img
          src={images[selected]}
          alt="Enlarged view"
          className="w-full h-auto max-h-[80vh] object-contain"
        />
        <div className="flex justify-center mt-4 space-x-2">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelected(idx)}
              className={`w-3 h-3 rounded-full ${
                idx === selected ? 'bg-brand-700' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </Modal>
    </>
  );
}