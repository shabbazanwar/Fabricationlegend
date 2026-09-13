"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Slide = {
  eyebrow: string;
  title: string;
  accent: string;
  body: string;
  /** Both actions are per-slide so a slide can never point both at one page. */
  cta: { label: string; href: string };
  secondary: { label: string; href: string };
  /**
   * Full-bleed background for the slide. Drop a file in /public/brand and set
   * the path here; it replaces the brand colour treatment entirely. Use a
   * landscape image, ideally 2000px wide or more, with the subject off to the
   * right so the copy on the left stays clear of it.
   */
  image?: string;
};

const SLIDES: Slide[] = [
  {
    eyebrow: "Your One Stop Interior Partner",
    title: "Aluminium & Steel",
    accent: "Finished Properly",
    body: "We fabricate and install doors, windows, curtain walling, ceilings, partitions and structural steelwork for construction companies and manufacturers across Uganda.",
    cta: { label: "Request a Quote", href: "/contact" },
    secondary: { label: "Explore Services", href: "/services" },
    image: "/work/gates/gates-01.webp",
  },
  {
    eyebrow: "Façades & Curtain Walling",
    title: "Glazed Façades,",
    accent: "Engineered To Hold",
    body: "Curtain wall systems designed around wind load, drainage and thermal movement, then installed square and sealed so they stay watertight years later.",
    cta: { label: "Discuss Your Façade", href: "/contact" },
    secondary: { label: "See All Services", href: "/services" },
    image: "/work/curtain-wall/curtain-wall-01.webp",
  },
  {
    eyebrow: "Interiors & Fit-Out",
    title: "Ceilings, Partitions",
    accent: "& Everything Between",
    body: "Gypsum and suspended ceilings, office partitioning, cabinetry, balcony grills and shading. One supplier for the whole interior envelope.",
    cta: { label: "Get a Fit-Out Quote", href: "/contact" },
    secondary: { label: "Who We Are", href: "/about" },
    image: "/work/gypsum-ceiling/gypsum-ceiling-01.webp",
  },
];

const INTERVAL = 6500;

export function HeroCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % SLIDES.length),
      INTERVAL,
    );
    return () => window.clearInterval(id);
  }, [paused]);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Featured services"
      className="relative isolate overflow-hidden bg-brand-black"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft")
          setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length);
        if (event.key === "ArrowRight")
          setIndex((i) => (i + 1) % SLIDES.length);
      }}
    >
      {/* Full-bleed backgrounds, cross-fading behind the copy. */}
      {SLIDES.map((slide, i) => (
        <div
          key={slide.eyebrow}
          aria-hidden
          className={cn(
            "absolute inset-0 -z-10 transition-opacity duration-1000 ease-out",
            i === index ? "opacity-100" : "opacity-0",
          )}
        >
          {slide.image ? (
            <Image
              src={slide.image}
              alt=""
              fill
              priority={i === 0}
              sizes="100vw"
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 bg-brand-black">
              <div className="absolute -top-40 -left-32 size-[36rem] rounded-full bg-brand-red/25 blur-[130px]" />
              <div className="absolute -right-40 -bottom-40 size-[34rem] rounded-full bg-brand-red/20 blur-[130px]" />
              <div
                className="absolute inset-0 opacity-[0.06]"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(135deg, #fff 0 1px, transparent 1px 16px)",
                }}
              />
            </div>
          )}
        </div>
      ))}

      {/* Scrim keeps white type legible over any photograph. */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-r from-brand-black/90 via-brand-black/70 to-brand-black/30"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-gradient-to-t from-brand-black/80 to-transparent"
      />

      <div className="relative mx-auto grid min-h-[32rem] max-w-6xl items-center px-5 py-20 sm:py-24 lg:min-h-[38rem] lg:py-28">
        {SLIDES.map((slide, i) => {
          const active = i === index;
          return (
            <div
              key={slide.eyebrow}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${SLIDES.length}`}
              aria-hidden={!active}
              inert={!active}
              className={cn(
                "col-start-1 row-start-1 max-w-2xl self-center transition-all duration-700 ease-out",
                active
                  ? "translate-y-0 opacity-100"
                  : "pointer-events-none translate-y-3 opacity-0",
              )}
            >
              <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-brand-red">
                <span className="h-px w-8 bg-brand-red" aria-hidden />
                {slide.eyebrow}
              </p>
              <h1 className="mt-5 font-display text-3xl leading-[1.08] font-bold tracking-tight text-white uppercase sm:text-5xl sm:leading-[1.05] lg:text-6xl">
                {slide.title}{" "}
                <span className="text-brand-red">{slide.accent}</span>
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/80">
                {slide.body}
              </p>
              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={slide.cta.href}
                  className="inline-flex items-center justify-center gap-2 bg-brand-red px-8 py-4 text-sm font-semibold text-white transition-colors hover:bg-brand-red-dark"
                >
                  {slide.cta.label}
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
                <Link
                  href={slide.secondary.href}
                  className="inline-flex items-center justify-center gap-2 border border-white/30 px-8 py-4 text-sm font-semibold text-white transition-colors hover:border-white hover:bg-white hover:text-brand-black"
                >
                  {slide.secondary.label}
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <div className="relative mx-auto flex max-w-6xl items-center gap-2.5 px-5 pb-12">
        {SLIDES.map((slide, i) => (
          <button
            key={slide.eyebrow}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
            aria-current={i === index}
            className={cn(
              "h-1 rounded-full transition-all duration-300",
              i === index
                ? "w-12 bg-brand-red"
                : "w-6 bg-white/30 hover:bg-white/60",
            )}
          />
        ))}
      </div>
    </section>
  );
}
