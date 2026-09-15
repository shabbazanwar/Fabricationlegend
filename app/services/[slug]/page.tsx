import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Camera, Phone } from "lucide-react";
import { CtaBanner } from "@/components/sections/cta-banner";
import { CONTACT, SERVICES, SITE } from "@/lib/constants";
import { workImages, workVideos } from "@/lib/work-images";
import { telHref } from "@/lib/utils";

export function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/services/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) return {};

  return {
    title: `${service.title} in Kampala`,
    description: `${service.description} ${SITE.legalName}, Kampala, Uganda.`,
    keywords: [
      `${service.title.toLowerCase()} kampala`,
      `${service.title.toLowerCase()} uganda`,
      "aluminium fabrication uganda",
    ],
    alternates: { canonical: `${SITE.url}/services/${service.slug}` },
  };
}

export default async function ServiceDetailPage({
  params,
}: PageProps<"/services/[slug]">) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);
  if (!service) notFound();

  const images = workImages(slug);
  const videos = workVideos(slug);
  const [hero, ...rest] = images;
  // With no photographs, the first video leads the page instead.
  const heroVideo = hero ? undefined : videos[0];
  const galleryVideos = heroVideo ? videos.slice(1) : videos;
  const hasGallery = rest.length > 0 || galleryVideos.length > 0;
  const Icon = service.icon;

  return (
    <>
      <section className="border-b border-brand-line bg-brand-surface">
        <div className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-brand-muted uppercase transition-colors hover:text-brand-red"
          >
            <ArrowLeft className="size-4" aria-hidden />
            All Services
          </Link>

          <div className="mt-6 grid gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div>
              <h1 className="font-display text-3xl leading-tight font-bold tracking-tight text-brand-black uppercase sm:text-4xl lg:text-5xl">
                {service.title}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-brand-muted">
                {service.description}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-brand-red px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-brand-red-dark"
                >
                  Request a Quote
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
                <a
                  href={telHref(CONTACT.phones[0])}
                  className="inline-flex items-center justify-center gap-2 border border-brand-line px-7 py-3.5 text-sm font-semibold text-brand-ink transition-colors hover:border-brand-red hover:text-brand-red"
                >
                  <Phone className="size-4" aria-hidden />
                  {CONTACT.phones[0]}
                </a>
              </div>
            </div>

            <div className="relative aspect-4/3 overflow-hidden bg-brand-black">
              {hero ? (
                <Image
                  src={hero.src}
                  alt={`${service.title} by ${SITE.name}`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 55vw, 100vw"
                  className="object-cover"
                />
              ) : heroVideo ? (
                <video
                  src={heroVideo.src}
                  poster={heroVideo.poster}
                  autoPlay
                  muted
                  loop
                  playsInline
                  aria-label={`${service.title} by ${SITE.name}`}
                  className="absolute inset-0 size-full object-cover"
                />
              ) : (
                <span className="flex size-full items-center justify-center border border-brand-line bg-white text-brand-red">
                  <Icon className="size-20" aria-hidden />
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14 sm:py-20">
        {hasGallery ? (
          <>
            {rest.length > 0 && (
              <>
                <h2 className="font-display text-2xl font-bold tracking-tight text-brand-black uppercase">
                  More {service.title}
                </h2>
                <p className="mt-3 max-w-2xl leading-relaxed text-brand-muted">
                  {images.length} projects photographed on site and in our
                  workshop.
                </p>
                <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {rest.map((image, i) => (
                    <div
                      key={image.src}
                      className="relative aspect-4/3 overflow-hidden bg-brand-surface"
                    >
                      <Image
                        src={image.card}
                        alt={`${service.title} project ${i + 2}`}
                        fill
                        loading="lazy"
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  ))}
                </div>
              </>
            )}

            {galleryVideos.length > 0 && (
              <div className={rest.length > 0 ? "mt-16" : undefined}>
                <h2 className="font-display text-2xl font-bold tracking-tight text-brand-black uppercase">
                  {service.title} on Video
                </h2>
                <p className="mt-3 max-w-2xl leading-relaxed text-brand-muted">
                  {videos.length} clips filmed at our installations.
                </p>
                <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
                  {galleryVideos.map((video, i) => (
                    <video
                      key={video.src}
                      src={video.src}
                      poster={video.poster}
                      controls
                      playsInline
                      preload="none"
                      aria-label={`${service.title} video ${i + 1}`}
                      className="aspect-9/16 w-full bg-brand-black object-cover"
                    />
                  ))}
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="flex gap-4 border border-brand-line bg-brand-surface p-8">
            <Camera className="mt-0.5 size-6 shrink-0 text-brand-red" aria-hidden />
            <div>
              <h2 className="font-display text-lg font-semibold tracking-tight text-brand-black uppercase">
                Photographs coming soon
              </h2>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-brand-muted">
                We are still photographing this part of our work. In the
                meantime, call us and we will send recent examples directly.
              </p>
            </div>
          </div>
        )}
      </section>

      <CtaBanner
        heading={`Need ${service.title.toLowerCase()}?`}
        body="Send us the dimensions or the drawings and we'll come back with pricing and a realistic timeline."
      />
    </>
  );
}
