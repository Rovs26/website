import Image from "next/image";

import { classNames } from "@/lib/utilities/class-names";

export type BrandMarkProps = {
  className?: string;
  priority?: boolean;
  showName?: boolean;
};

export function BrandMark({
  className,
  priority = false,
  showName = true,
}: BrandMarkProps) {
  return (
    <span
      className={classNames(
        "text-text inline-flex items-center gap-2.5 font-semibold",
        className,
      )}
    >
      <Image
        alt={showName ? "" : "KitaMo"}
        className="size-10 rounded-[var(--km-radius-control)]"
        height={40}
        priority={priority}
        src="/brand/kitamo-app-icon.png"
        width={40}
      />
      {showName ? (
        <span className="text-lg tracking-[-0.02em]">KitaMo</span>
      ) : null}
    </span>
  );
}
