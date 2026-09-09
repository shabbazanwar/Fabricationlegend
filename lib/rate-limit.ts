import { headers } from "next/headers";

const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

type Bucket = { count: number; resetAt: number };

// In-memory and therefore per-instance: it throttles casual flooding, not a
// distributed attack. Swap for Upstash/Redis if the site ever needs that.
const globalForLimit = globalThis as unknown as {
  rateLimitBuckets: Map<string, Bucket> | undefined;
};
const buckets = (globalForLimit.rateLimitBuckets ??= new Map());

export async function clientKey() {
  const list = await headers();
  const forwarded = list.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() || list.get("x-real-ip") || "local";
  return ip;
}

export function checkRateLimit(key: string) {
  const now = Date.now();

  if (buckets.size > 10_000) {
    for (const [k, v] of buckets) if (v.resetAt < now) buckets.delete(k);
  }

  const bucket = buckets.get(key);
  if (!bucket || bucket.resetAt < now) {
    buckets.set(key, { count: 1, resetAt: now + WINDOW_MS });
    return { allowed: true as const };
  }

  if (bucket.count >= MAX_PER_WINDOW) {
    return {
      allowed: false as const,
      retryAfterMinutes: Math.ceil((bucket.resetAt - now) / 60000),
    };
  }

  bucket.count += 1;
  return { allowed: true as const };
}
