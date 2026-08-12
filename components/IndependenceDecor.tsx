/**
 * Shared decorative elements for the Independence Day campaign.
 *
 * All CSS/SVG — no decorative image files. The tricolour is used as a restrained
 * accent (thin ribbons, a soft chakra motif) over KT's Fashion's existing purple
 * base, so the campaign reads as festive and Indian without turning into a flag.
 */

/** A slim saffron → white → green ribbon. Used as a rule under headings and
 *  along section edges rather than as large blocks of colour. */
export function TricolourRule({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`block h-[3px] w-24 rounded-full bg-gradient-to-r from-[#FF9933] via-white to-[#138808] ${className}`}
    />
  );
}

/** Ashoka-chakra inspired spoked ring. Deliberately abstract and low-contrast —
 *  a nod, not a reproduction of the flag emblem. */
export function ChakraMotif({ className = "" }: { className?: string }) {
  const spokes = Array.from({ length: 24 }, (_, i) => (i * 360) / 24);
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 100"
      fill="none"
      className={`pointer-events-none ${className}`}
    >
      <circle cx="50" cy="50" r="34" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="50" cy="50" r="5" fill="currentColor" />
      {spokes.map((deg) => (
        <line
          key={deg}
          x1="50"
          y1="50"
          x2="50"
          y2="17"
          stroke="currentColor"
          strokeWidth="0.9"
          transform={`rotate(${deg} 50 50)`}
        />
      ))}
    </svg>
  );
}

/** Soft drifting tricolour ribbons for the banner backdrop. */
export function RibbonDrift({ className = "" }: { className?: string }) {
  const ribbons = [
    { left: "4%", w: "3px", h: "44%", delay: "0s", dur: "7s", from: "#FF9933" },
    { left: "17%", w: "2px", h: "30%", delay: "1.6s", dur: "8.5s", from: "#ffffff" },
    { left: "31%", w: "2px", h: "38%", delay: "0.8s", dur: "7.6s", from: "#138808" },
    { left: "63%", w: "2px", h: "34%", delay: "2.1s", dur: "8.2s", from: "#FF9933" },
    { left: "78%", w: "3px", h: "42%", delay: "0.4s", dur: "7.2s", from: "#138808" },
    { left: "91%", w: "2px", h: "28%", delay: "1.2s", dur: "8.8s", from: "#ffffff" },
  ];

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {ribbons.map((r, i) => (
        <span
          key={i}
          className="animate-indep-drift absolute top-0 rounded-full"
          style={{
            left: r.left,
            width: r.w,
            height: r.h,
            opacity: 0.22,
            background: `linear-gradient(to bottom, transparent, ${r.from}, transparent)`,
            animationDelay: r.delay,
            animationDuration: r.dur,
          }}
        />
      ))}
    </div>
  );
}
