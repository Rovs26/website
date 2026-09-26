/** The site's two custom icons. Both are decorative. */
export function Chevron() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="1em"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      width="1em"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function Arrow() {
  return (
    <span aria-hidden="true" className="leading-none">
      →
    </span>
  );
}
