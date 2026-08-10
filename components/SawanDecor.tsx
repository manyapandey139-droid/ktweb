/**
 * Shared decorative elements for the Sawan campaign.
 *
 * All of this is CSS/SVG — no decorative image files — so it scales cleanly,
 * costs nothing to load, and keeps the campaign inside KT's Fashion's existing
 * purple/lavender palette while giving it a distinct monsoon identity.
 */

/** Fine vertical rain streaks. Deliberately low-contrast so they read as
 *  atmosphere rather than pattern. Animation is disabled automatically for
 *  users who prefer reduced motion (handled globally in globals.css). */
export function SawanRain({ className = "" }: { className?: string }) {
  const drops = [
    { left: "6%", delay: "0s", duration: "2.6s", height: "38%", opacity: 0.25 },
    { left: "14%", delay: "0.9s", duration: "3.1s", height: "26%", opacity: 0.18 },
    { left: "23%", delay: "0.35s", duration: "2.9s", height: "32%", opacity: 0.22 },
    { left: "38%", delay: "1.4s", duration: "3.4s", height: "22%", opacity: 0.16 },
    { left: "47%", delay: "0.6s", duration: "2.7s", height: "30%", opacity: 0.2 },
    { left: "61%", delay: "1.8s", duration: "3.2s", height: "26%", opacity: 0.18 },
    { left: "72%", delay: "0.2s", duration: "2.8s", height: "34%", opacity: 0.24 },
    { left: "84%", delay: "1.1s", duration: "3.3s", height: "24%", opacity: 0.17 },
    { left: "93%", delay: "0.75s", duration: "2.95s", height: "30%", opacity: 0.2 },
  ];

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
    >
      {drops.map((d, i) => (
        <span
          key={i}
          className="animate-sawan-rain absolute top-0 w-px rounded-full bg-gradient-to-b from-transparent via-white to-transparent"
          style={{
            left: d.left,
            height: d.height,
            opacity: d.opacity,
            animationDelay: d.delay,
            animationDuration: d.duration,
          }}
        />
      ))}
    </div>
  );
}

/** A soft botanical sprig. Used sparingly in corners for a monsoon-garden
 *  feel without tipping into a "rainy day" cliché. */
export function SawanLeaf({
  className = "",
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 200 200"
      fill="none"
      className={`pointer-events-none absolute ${className}`}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
    >
      <path
        d="M20 180C60 150 90 120 110 80C126 48 132 26 134 12"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
      />
      {[
        "M112 74C104 56 106 38 122 26C132 44 130 62 112 74Z",
        "M96 104C82 92 78 74 90 58C104 70 108 88 96 104Z",
        "M74 132C58 124 50 108 58 90C74 100 82 116 74 132Z",
        "M120 70C138 62 154 66 164 82C146 92 130 88 120 70Z",
        "M100 100C118 92 134 96 144 112C126 122 110 118 100 100Z",
        "M52 158C38 150 30 134 38 116C54 126 62 142 52 158Z",
      ].map((d, i) => (
        <path key={i} d={d} fill="currentColor" opacity="0.28" />
      ))}
    </svg>
  );
}
