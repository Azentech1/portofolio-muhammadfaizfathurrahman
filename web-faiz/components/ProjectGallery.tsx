'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { projectsData } from '../data/portfolioData';

const categories = ['All', 'IoT & Hardware', 'Software', 'Hardware'];

export default function ProjectGallery() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects = projectsData.filter((p) => 
    activeCategory === 'All' ? true : p.category === activeCategory
  );

  return (
    <section id="projects" className="py-20 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-white mb-10">Proyek & Kompetisi</h2>
        
        {/* Filter */}
        <div className="flex justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                activeCategory === cat ? 'bg-blue-600 text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Project dengan Gambar */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-blue-500 transition-colors"
              >
                {/* Tempat Gambar Project */}
                <div className="relative h-48 w-full bg-slate-800">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill 
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold text-blue-400 mb-2 block">{project.category}</span>
                  <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-slate-400 text-sm mb-4">{project.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2 py-1 bg-slate-800 text-slate-300 text-xs rounded">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}