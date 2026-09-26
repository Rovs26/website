import Image from "next/image";

import { classNames } from "@/lib/utilities/class-names";

export type BrandMarkProps = {
  className?: string;
  priority?: boolean;
  size?: number;
};

/**
 * The web app's K mark, unchanged (public/brand/kitamo-mark.png). Decorative
 * where it sits inside a link that already says "KitaMo home".
 */
export function BrandMark({
  className,
  priority = false,
  size = 44,
}: BrandMarkProps) {
  return (
    <Image
      alt=""
      className={classNames("block", className)}
      height={size}
      priority={priority}
      src="/brand/kitamo-mark.png"
      width={size}
    />
  );
}

/** The mark with its "KitaMo" wordmark, for the footer. */
export function BrandLogo({ className }: { className?: string }) {
  return (
    <Image
      alt="KitaMo"
      className={classNames("block", className)}
      height={88}
      src="/brand/kitamo-logo.png"
      width={107}
    />
  );
}
