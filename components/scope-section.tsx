"use client";

import { motion } from "framer-motion";

const scopeItems = [
  "Pitch Decks",
  "Investor Presentations",
  "Film & Television Pitch Materials",
  "Series Bibles",
  "Brand Presentations",
  "Keynotes",
  "Visual Treatments",
  "Copywriting",
];

export function ScopeSection() {
  return (
    <section className="py-12 lg:py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6">
            Scope of Work
          </p>
          
          <ul className="flex flex-wrap items-center gap-x-10 lg:gap-x-12 gap-y-4">
            {scopeItems.map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex items-center gap-3 text-lg lg:text-[1.35rem] tracking-[-0.01em] text-foreground"
              >
                <span className="w-1 h-1 rounded-full bg-foreground/30 flex-shrink-0" />
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
