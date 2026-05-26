"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getCategoryBySlug, getProjectById } from "@/lib/portfolio-data";

export default function ProjectPage() {
  const params = useParams();
  const categorySlug = params.category as string;
  const projectId = params.project as string;

  const category = getCategoryBySlug(categorySlug);
  const project = getProjectById(categorySlug, projectId);

  if (!category || !project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-foreground mb-4">Project not found</h1>
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

  // Get adjacent projects for navigation
  const currentIndex = category.projects.findIndex((p) => p.id === projectId);
  const prevProject = currentIndex > 0 ? category.projects[currentIndex - 1] : null;
  const nextProject = currentIndex < category.projects.length - 1 ? category.projects[currentIndex + 1] : null;

  return (
    <main className="min-h-screen">

      <header className="fixed top-0 left-0 right-0 z-50 px-6 lg:px-8 py-5 bg-background/80 backdrop-blur-sm border-b border-border/40">
        <div className="max-w-7xl mx-auto grid grid-cols-3 items-center">
          <Link
            href={`/work/${categorySlug}`}
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
      
      {/* Project Hero */}
      <section className="pt-28 lg:pt-32 pb-8 lg:pb-10 px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4"
              >
                {project.client} · {project.year}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-serif text-4xl lg:text-5xl text-foreground"
              >
                {project.title}
              </motion.h1>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base lg:text-lg text-foreground/70 leading-relaxed"
            >
              {project.description}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Slides Gallery */}
      <section className="px-6 lg:px-8 pb-16 lg:pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-4 lg:space-y-6">
            {project.slides.map((slide, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="aspect-video bg-transparent overflow-hidden relative"
              >
                {slide.endsWith(".mp4") ? (
                  <video
                    src={slide}
                    autoPlay
                    muted
                    loop
                    playsInline
                    controls
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                ) : (
                  <img
                    src={slide}
                    alt={`${project.title} slide ${index + 1}`}
                    className="absolute inset-0 w-full h-full object-contain"
                  />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Navigation */}
      <section className="px-6 lg:px-8 py-12 lg:py-16 border-t border-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            {prevProject ? (
              <Link
                href={`/work/${categorySlug}/${prevProject.id}`}
                className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
                <div>
                  <p className="text-xs uppercase tracking-wider mb-1">Previous</p>
                  <p className="font-serif text-foreground">{prevProject.title}</p>
                </div>
              </Link>
            ) : (
              <Link
                href={`/work/${categorySlug}`}
                className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <ArrowLeft className="w-4 h-4 transition-transform duration-300 group-hover:-translate-x-1" />
                <div>
                  <p className="text-xs uppercase tracking-wider mb-1">Back to</p>
                  <p className="font-serif text-foreground">{category.title}</p>
                </div>
              </Link>
            )}
            {nextProject ? (
              <Link
                href={`/work/${categorySlug}/${nextProject.id}`}
                className="group flex items-center gap-3 text-right text-muted-foreground hover:text-foreground transition-colors"
              >
                <div>
                  <p className="text-xs uppercase tracking-wider mb-1">Next</p>
                  <p className="font-serif text-foreground">{nextProject.title}</p>
                </div>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            ) : (
              <Link
                href={`/work/${categorySlug}`}
                className="group flex items-center gap-3 text-right text-muted-foreground hover:text-foreground transition-colors"
              >
                <div>
                  <p className="text-xs uppercase tracking-wider mb-1">Back to</p>
                  <p className="font-serif text-foreground">{category.title}</p>
                </div>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="px-6 lg:px-8 py-12 lg:py-16 bg-card/50">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-2xl lg:text-3xl text-foreground mb-4"
          >
            Interested in working together?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-muted-foreground mb-6"
          >
            Let&apos;s discuss your next presentation project.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-primary-foreground rounded-full text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              Get in touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
