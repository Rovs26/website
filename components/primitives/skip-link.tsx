import { classNames } from "@/lib/utilities/class-names";

export type SkipLinkProps = {
  className?: string;
  href?: `#${string}`;
  label?: string;
};

export function SkipLink({
  className,
  href = "#main-content",
  label = "Skip to main content",
}: SkipLinkProps) {
  return (
    <a
      className={classNames(
        "rounded-control bg-text text-page shadow-raised fixed top-3 left-3 z-50 -translate-y-[calc(100%+1rem)] px-4 py-3 font-bold whitespace-nowrap transition-transform focus:translate-y-0 motion-reduce:transition-none",
        className,
      )}
      href={href}
    >
      {label}
    </a>
  );
}
