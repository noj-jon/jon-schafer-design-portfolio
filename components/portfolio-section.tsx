"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const portfolioCategories = [
  {
    id: 1,
    title: "Entertainment",
    description:
      "Pitch materials for scripted and unscripted film, television, documentary, and entertainment projects — built to communicate tone, world, character, and commercial potential.",
    slug: "entertainment",
    image: "/images/EXEC Deck_Polished Draft_Viewing Link.jpg",
  },
  {
    id: 2,
    title: "Investor & Brand",
    description:
      "Strategic presentations for startups, brands, and enterprise clients — designed to simplify complexity, build confidence, and inspire action.",
    slug: "investor",
    image: "/images/polarized-page1.png",
  },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-12 lg:py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 lg:mb-12"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Selected Work
          </p>
          <h2 className="font-serif text-3xl lg:text-4xl text-foreground">
            Portfolio
          </h2>
        </motion.div>

        <div className="divide-y divide-border">
          {portfolioCategories.map((category, index) => (
            <motion.article
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="py-8 lg:py-10 first:pt-0"
            >
              <div className="grid lg:grid-cols-[1fr_1.5fr_1fr] gap-6 lg:gap-10 items-start">
                {/* Left side - Title and button */}
                <div>
                  <h3 className="font-serif text-xl lg:text-2xl text-foreground mb-4">
                    {category.title}
                  </h3>
                  <Link
                    href={`/work/${category.slug}`}
                    className="inline-flex items-center gap-2 px-4 py-2 border border-foreground/30 rounded-full text-sm text-foreground hover:bg-foreground hover:text-primary-foreground transition-colors duration-300 group"
                  >
                    View samples
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>
                </div>

                {/* Middle - Description */}
                <p className="text-sm lg:text-base text-foreground/80 leading-relaxed">
                  {category.description}
                </p>

                {/* Right side - Preview image */}
                <Link
                  href={`/work/${category.slug}`}
                  className="aspect-video bg-card rounded overflow-hidden relative group cursor-pointer block"
                >
                  {category.image ? (
                    <img
                      src={category.image}
                      alt={`${category.title} sample`}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-full relative overflow-hidden">
                        <div className="absolute inset-3 lg:inset-4 flex flex-col justify-between">
                          <div className="flex justify-between items-start">
                            <div className="w-10 h-0.5 bg-foreground/20 rounded" />
                            <div className="w-5 h-5 rounded-full bg-foreground/10" />
                          </div>
                          <div className="space-y-1.5">
                            <div className="w-3/4 h-2 lg:h-3 bg-foreground/15 rounded" />
                            <div className="w-1/2 h-2 lg:h-3 bg-foreground/10 rounded" />
                          </div>
                          <div className="flex gap-1.5">
                            <div className="w-6 h-6 lg:w-8 lg:h-8 bg-foreground/5 rounded" />
                            <div className="w-6 h-6 lg:w-8 lg:h-8 bg-foreground/5 rounded" />
                            <div className="w-6 h-6 lg:w-8 lg:h-8 bg-foreground/5 rounded" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500" />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
