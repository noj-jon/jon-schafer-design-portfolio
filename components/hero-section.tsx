"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const portfolioImages = [
  "/images/exec-page1.png",
  "/images/polarized-page1.png",
  "/images/furyandthemonster-page1.png",
   "/images/noreservations-page1.png",
];

export function HeroSection() {
  const [offset, setOffset] = useState(0);
  const animationRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);

  useEffect(() => {
    const speed = 0.03;

    const animate = (time: number) => {
      if (lastTimeRef.current) {
        const delta = time - lastTimeRef.current;
        setOffset((prev) => prev + speed * delta);
      }
      lastTimeRef.current = time;
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  const imageWidth = 320;
  const gap = 16;
  const totalWidth = portfolioImages.length * (imageWidth + gap);

  return (
    <section className="pt-24 lg:pt-28">
      <div className="px-6 lg:px-8 mb-3 lg:mb-4">
        <div className="w-full">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="flex w-full justify-between text-sm font-medium uppercase tracking-[0.18em] text-foreground/80"
          >
            <span>Premium Pitch Decks</span>
            <span>Visual Storytelling</span>
            <span>Creative Strategy</span>  
          </motion.p>
        </div>
      </div>

      <div className="w-full overflow-hidden py-3 lg:py-4">
        <div
          className="flex gap-4 lg:gap-6"
          style={{
            transform: `translateX(-${offset % totalWidth}px)`,
          }}
        >
          {[...portfolioImages, ...portfolioImages, ...portfolioImages].map(
            (image, index) => (
              <div
                key={`${image}-${index}`}
                className="relative flex-shrink-0 w-[320px] lg:w-[480px] aspect-video group cursor-pointer overflow-hidden rounded bg-card"
              >
                {image.endsWith(".mp4") ? (
                  <video
                    src={image}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <img
                    src={image}
                    alt="Portfolio preview"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
              </div>
            )
          )}
        </div>
      </div>

      <div className="px-6 lg:px-8 pt-4 lg:pt-6 pb-12 lg:pb-16">
        <div className="max-w-[1600px] mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif text-4xl md:text-5xl lg:text-7xl xl:text-8xl text-foreground leading-[1.1] tracking-tight max-w-6xl text-balance"
          >
            Design that creates belief.
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 lg:mt-16 max-w-[1100px]"
          >
            <div className="space-y-6 text-lg lg:text-xl text-muted-foreground leading-[1.95] tracking-[0.002em]">
  <p>
    I design premium pitch decks and presentation materials for filmmakers, studios, founders, and investors.
  </p>

  <p>
    My work has supported projects sold, financed, and partnered with companies including Paramount Studios, Universal Content Productions, Blumhouse, TIME Studios, Religion of Sports, and JPMorgan Chase.
  </p>

  <p>
    I combine immersive design, cinematic storytelling, and strategic structure to create pitch decks that{" "}
    <br />
    make an idea feel undeniable and inspire action.
  </p>

  <p>
    Let’s create together.
  </p>
</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
