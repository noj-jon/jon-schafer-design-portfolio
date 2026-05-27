"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getCategoryBySlug, portfolioCategories } from "@/lib/portfolio-data";

export default function CategoryPage() {
  const params = useParams();
  const slug = params.category as string;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-foreground mb-4">Category not found</h1>
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to portfolio
          </Link>
        </div>
      </div>
    );
  }

  // Get adjacent categories for navigation
  const currentIndex = portfolioCategories.findIndex((c) => c.slug === slug);
  const prevCategory = currentIndex > 0 ? portfolioCategories[currentIndex - 1] : null;
  const nextCategory = currentIndex < portfolioCategories.length - 1 ? portfolioCategories[currentIndex + 1] : null;

  return (
    <main className="min-h-screen">

      <header className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-8 py-5 bg-background/80 backdrop-blur-sm border-b border-border/40">
        <div className="max-w-7xl mx-auto grid grid-cols-3 items-center">
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors justify-self-start"
          >
            <ArrowLeft className="w-4 h-4" />
            {category.title}
          </Link>

          <Link href="/" className="font-serif text-lg text-foreground justify-self-center">
            Jon Schafer
          </Link>

          <Link
            href="/#contact"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors justify-self-end"
          >
            Contact
          </Link>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-28 lg:pt-32 pb-12 lg:pb-16 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4"
          >
            Selected Work
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-serif text-4xl lg:text-5xl text-foreground mb-6"
          >
            {category.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base lg:text-lg text-foreground/70 max-w-2xl leading-relaxed"
          >
            {category.description}
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-6 lg:px-8 pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {category.projects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              >
                <Link
                  href={`/work/${slug}/${project.id}`}
                  className="block group"
                >
                  <div className="aspect-video bg-card rounded overflow-hidden relative mb-4">
                    <img
                      src={project.coverImage}
                      alt={project.title}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-500" />
                  </div>
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="font-serif text-xl text-foreground mb-1 group-hover:text-foreground/80 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {project.client} · {project.year}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground mt-1 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="px-6 lg:px-8 py-12 lg:py-16 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            {prevCategory ? (
              <Link
                href={`/work/${prevCategory.slug}`}
                className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
                <div>
                  <p className="text-xs uppercase tracking-wider mb-1">Previous</p>
                  <p className="font-serif text-foreground">{prevCategory.title}</p>
                </div>
              </Link>
            ) : (
              <div />
            )}
            {nextCategory ? (
              <Link
                href={`/work/${nextCategory.slug}`}
                className="group flex items-center gap-3 text-right text-muted-foreground hover:text-foreground transition-colors"
              >
                <div>
                  <p className="text-xs uppercase tracking-wider mb-1">Next</p>
                  <p className="font-serif text-foreground">{nextCategory.title}</p>
                </div>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
