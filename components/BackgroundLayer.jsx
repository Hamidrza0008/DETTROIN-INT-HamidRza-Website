export default function BackgroundLayer() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-screen overflow-hidden bg-background"
    >
      {/* soft blue glows */}
      <div className="absolute -top-20 -right-14 h-80 w-80 rounded-full bg-secondary/30 blur-[85px]" />
      <div className="absolute -bottom-24 -left-14 h-96 w-96 rounded-full bg-secondary/35 blur-[95px]" />

      {/* faint blueprint grid, bottom-right corner only */}
      <svg
        className="absolute bottom-0 right-0 h-64 w-64 opacity-40 md:h-80 md:w-80"
        viewBox="0 0 200 200"
      >
        <defs>
          <pattern id="bg-grid" width="26" height="26" patternUnits="userSpaceOnUse">
            <path
              d="M26 0H0V26"
              fill="none"
              className="stroke-secondary/30"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="200" height="200" fill="url(#bg-grid)" />
      </svg>

      {/* thin gold arcs, tucked into the corners flanking the navbar */}
      <svg
        className="absolute top-0 left-0 h-28 w-28 md:h-36 md:w-36"
        viewBox="0 0 120 120"
        fill="none"
      >
        <path
          d="M0 60C40 60 60 40 60 0"
          className="stroke-accent/70"
          strokeWidth="2.5"
        />
      </svg>
      <svg
        className="absolute top-0 right-0 h-28 w-28 md:h-36 md:w-36"
        viewBox="0 0 120 120"
        fill="none"
      >
        <path
          d="M120 60C80 60 60 40 60 0"
          className="stroke-accent/70"
          strokeWidth="2.5"
        />
      </svg>
    </div>
  );
}
