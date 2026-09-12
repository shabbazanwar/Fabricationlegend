import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SERVICES, type Service } from "@/lib/constants";
import { heroImage, workImages } from "@/lib/work-images";

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  const hero = heroImage(service.slug);
  const count = workImages(service.slug).length;

  return (
    <Link
      href={`/services/${service.slug}`}
      className="group flex flex-col border border-brand-line bg-white transition-colors hover:border-brand-red"
    >
      <div className="relative aspect-4/3 overflow-hidden bg-brand-surface">
        {hero ? (
          <Image
            src={hero.card}
            alt={service.title}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <span
            aria-hidden
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, #111 0 1px, transparent 1px 14px)",
            }}
          />
        )}
        {count > 1 && (
          <span className="absolute top-3 right-3 bg-brand-black/75 px-2.5 py-1 text-[0.7rem] font-semibold text-white backdrop-blur-sm">
            {count} photos
          </span>
        )}
      </div>

      <div className="relative flex flex-1 flex-col p-6">
        <span className="absolute -top-7 left-6 inline-flex size-14 items-center justify-center rounded-full border-4 border-white bg-brand-red text-white shadow-sm transition-transform duration-300 group-hover:scale-110">
          <Icon className="size-6" aria-hidden />
        </span>
        <h3 className="mt-8 font-display text-lg font-semibold tracking-tight text-brand-black uppercase">
          {service.title}
        </h3>
        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-brand-muted">
          {service.description}
        </p>
        <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-red">
          {count ? "View work" : "Enquire"}
          <ArrowRight
            className="size-4 transition-transform group-hover:translate-x-1"
            aria-hidden
          />
        </span>
      </div>
    </Link>
  );
}

export function ServicesGrid({ limit }: { limit?: number }) {
  // Services with photographs lead, so the grid opens on real work.
  const ordered = [...SERVICES].sort(
    (a, b) => workImages(b.slug).length - workImages(a.slug).length,
  );
  const services = limit ? ordered.slice(0, limit) : ordered;

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <ServiceCard key={service.slug} service={service} />
      ))}
    </div>
  );
}
