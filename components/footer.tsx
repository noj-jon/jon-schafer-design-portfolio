"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="py-12 px-6 lg:px-8 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
        >
          <div>
            <p className="text-foreground font-medium">Jon Schafer</p>
            <p className="text-sm text-muted-foreground mt-1">
              Presentation Design
            </p>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted-foreground">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors duration-300"
            >
              Twitter
            </a>
            <a
              href="https://dribbble.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors duration-300"
            >
              Dribbble
            </a>
          </div>

          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} All rights reserved
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
