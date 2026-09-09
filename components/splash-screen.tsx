import Image from "next/image";

/**
 * Pure-CSS intro overlay: no state, no effect, works with JS disabled, and
 * animates itself to `visibility: hidden` so it never traps focus or clicks.
 * Plays on a full page load, not on client-side navigation.
 */
export function SplashScreen() {
  return (
    <div
      aria-hidden
      className="splash fixed inset-0 z-100 flex items-center justify-center bg-brand-black"
    >
      <div className="absolute size-[28rem] rounded-full bg-brand-red/20 blur-[120px]" />
      <div className="relative flex flex-col items-center">
        <Image
          src="/brand/logo.png"
          alt=""
          width={512}
          height={512}
          priority
          className="splash-logo size-28 sm:size-32"
        />
        <div className="mt-8 h-0.5 w-40 overflow-hidden bg-white/15">
          <div className="splash-bar h-full w-full origin-left bg-brand-red" />
        </div>
      </div>
    </div>
  );
}
