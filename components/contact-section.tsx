"use client";

import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section id="contact" className="py-12 lg:py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Get in Touch
            </p>
            <h2 className="font-serif text-3xl lg:text-5xl text-foreground mb-6 text-balance">
              Let&apos;s make it inevitable.
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-md">
              Currently accepting projects for Q2 2026. Typical timelines run 
              2–3 weeks from kickoff to final delivery.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:jondavidschafer@gmail.com"
                className="block text-lg text-foreground hover:text-accent transition-colors duration-300"
              >
                jondavidschafer@gmail.com
              </a>
              <p className="text-sm text-muted-foreground">
                Based in Bend, Oregon. Work globally.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm text-muted-foreground mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors duration-300"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm text-muted-foreground mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors duration-300"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="project"
                  className="block text-sm text-muted-foreground mb-2"
                >
                  Project Type
                </label>
                <select
                  id="project"
                  name="project"
                  className="w-full bg-transparent border-b border-border py-3 text-foreground focus:outline-none focus:border-foreground transition-colors duration-300 appearance-none cursor-pointer"
                >
                  <option value="" className="bg-background">Select project type</option>
                  <option value="pitch-deck" className="bg-background">Pitch Deck</option>
                  <option value="sales-deck" className="bg-background">Sales Deck</option>
                  <option value="keynote" className="bg-background">Keynote Presentation</option>
                  <option value="brand" className="bg-background">Brand Presentation</option>
                  <option value="other" className="bg-background">Other</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm text-muted-foreground mb-2"
                >
                  Tell me about your project
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="w-full bg-transparent border-b border-border py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-foreground transition-colors duration-300 resize-none"
                  placeholder="What are you working on? How can I help? When does it need to be delivered? To who? And all that jazz."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-8 px-8 py-4 bg-foreground text-primary-foreground text-sm tracking-wide hover:bg-accent transition-colors duration-300"
              >
                Talk soon.
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
