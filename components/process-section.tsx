"use client";

import { motion } from "framer-motion";

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    duration: "Day 1",
    description:
      "We start with a focused call to understand your story, audience, constraints, and goals.",
  },
  {
    step: "02",
    title: "Strategy",
    duration: "Days 2–3",
    description:
      "I shape the narrative arc and slide-by-slide structure so the story is clear before design begins.",
  },
  {
    step: "03",
    title: "Direction",
    duration: "Days 4–6",
    description:
      "Visual design begins. We establish the visual language, references, tone, typography, and overall presentation direction.",
  },
  {
    step: "04",
    title: "Design",
    duration: "Days 7–10",
    description:
      "I build the first full draft, translating the strategy and visual direction into a polished deck.",
  },
  {
    step: "05",
    title: "Refinement",
    duration: "Days 11–13",
    description:
      "Two rounds of feedback and revision. We polish every detail until the deck performs precisely as intended.",
  },
  {
    step: "06",
    title: "Delivery",
    duration: "Day 14",
    description:
      "You receive the final deck in the formats you need – ready for pitching, presenting, or sharing.",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-12 lg:py-16 px-6 lg:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 lg:mb-12"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
            How It Works
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl text-foreground">
            The process
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 lg:left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

          <div className="space-y-8 lg:space-y-10">
            {processSteps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative md:pl-20 lg:pl-24"
              >
                {/* Step number indicator */}
                <div className="hidden md:flex absolute left-0 top-0 w-8 lg:w-16 h-8 lg:h-8 items-center justify-center">
                  <div className="w-2.5 h-2.5 rounded-full bg-foreground" />
                </div>

                <div className="grid lg:grid-cols-[200px_1fr] gap-4 lg:gap-12">
                  <div>
                    <span className="text-sm font-mono text-muted-foreground">
                      {item.step}
                    </span>
                    <p className="text-sm text-muted-foreground mt-1">
                      {item.duration}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-serif text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

