"use client";

import { motion } from "framer-motion";

const differentiators = [
  {
    number: "01",
    title: "Story Architecture",
    description:
      "Humans communicate through story. Every deck needs a beginning, middle, and end — whether it's selling a feature film, a startup, or a new product. I use my background in entertainment development to shape decks with emotional arcs that create clarity, momentum, and action."
  },
  {
    number: "02",
    title: "Creative Restraint",
    description:
      "Premium design means knowing what to leave out.",
  },
  {
    number: "03",
    title: "Executive Fluency",
    description:
      "As a Senior Graphic Designer and Director of Development, I understand both creative and executive priorities. I design decks that don't just look good — they relieve pressure points, sharpen the pitch, and create confidence for decision-makers.",
  },
  {
    number: "04",
    title: "Beyond Design",
    description:
      "I don't simply deliver polished slides. I help shape the copy, structure, imagery, and strategy so the deck works as a comprehensive persuasive tool. The goal is not decoration. The goal is to get something done.",
  },
];

export function DifferenceSection() {
  return (
    <section id="difference" className="py-12 lg:py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 lg:mb-12"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Approach
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl text-foreground max-w-2xl text-balance">
            Made to move the room
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {differentiators.map((item, index) => (
            <motion.div
              key={item.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="flex gap-6">
                <span className="text-sm text-muted-foreground font-mono">
                  {item.number}
                </span>
                <div>
                  <h3 className="text-xl lg:text-2xl font-serif text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
