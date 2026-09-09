import { SERVICES, type Service } from "@/lib/constants";

function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <article className="group relative overflow-hidden border border-brand-line bg-white p-7 transition-colors hover:border-brand-red">
      {/* Red rule sweeps across on hover, keeping the badge's white/red pairing. */}
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-brand-red transition-transform duration-300 group-hover:scale-x-100"
      />
      <span className="inline-flex size-12 items-center justify-center bg-brand-surface text-brand-red transition-colors group-hover:bg-brand-red group-hover:text-white">
        <Icon className="size-6" aria-hidden />
      </span>
      <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-brand-black uppercase">
        {service.title}
      </h3>
      <p className="mt-2.5 text-sm leading-relaxed text-brand-muted">
        {service.description}
      </p>
    </article>
  );
}

export function ServicesGrid({ limit }: { limit?: number }) {
  const services = limit ? SERVICES.slice(0, limit) : SERVICES;
  return (
    <div className="grid gap-px bg-brand-line sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <ServiceCard key={service.slug} service={service} />
      ))}
    </div>
  );
}
