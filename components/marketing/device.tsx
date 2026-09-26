import Image from "next/image";

import { plates, type PlateKey } from "@/lib/content/plates";
import { classNames } from "@/lib/utilities/class-names";

export type DeviceProps = {
  className?: string;
  plate: PlateKey;
  priority?: boolean;
  /** A ring in the background colour, for a phone standing in front of a tablet. */
  ring?: "paper" | "ink";
  /** Passed to next/image so the browser picks a small enough file. */
  sizes: string;
};

/**
 * A plain black bezel around a flat screen plate. Proportions follow the
 * design's Device component: all sizes are in container units of the
 * wrapper, so the frame scales with whatever width it is given.
 */
export function Device({
  className,
  plate,
  priority = false,
  ring,
  sizes,
}: DeviceProps) {
  const screen = plates[plate];
  const tablet = screen.kind === "tablet";

  return (
    // Width comes from the caller; full width only when none is given, so the
    // two never compete in the stylesheet.
    <div className={classNames("@container", className ?? "w-full")}>
      <div
        className={classNames(
          "bg-ink",
          tablet
            ? "rounded-[4.4cqw] p-[max(6px,2.2cqw)]"
            : "rounded-[16cqw] p-[max(4px,3.8cqw)]",
          ring === "paper" && "shadow-[0_0_0_3px_var(--color-page)]",
          ring === "ink" && "shadow-[0_0_0_3px_var(--color-ink)]",
        )}
      >
        <div
          className={classNames(
            "bg-page overflow-hidden",
            tablet ? "rounded-[max(3px,1.1cqw)]" : "rounded-[13cqw]",
          )}
        >
          <Image
            alt={screen.alt}
            className="block h-auto w-full"
            height={screen.height}
            priority={priority}
            sizes={sizes}
            src={screen.src}
            width={screen.width}
          />
        </div>
      </div>
    </div>
  );
}

/**
 * A tablet with a phone standing in front of its right-hand column. Both
 * stand on the same baseline, so the pair sits on the counter band below.
 */
export function DevicePair({
  phone,
  priority = false,
  ring = "paper",
  tablet,
}: {
  phone: PlateKey;
  priority?: boolean;
  ring?: "paper" | "ink";
  tablet: PlateKey;
}) {
  return (
    <div className="grid items-end">
      <Device
        className="wide:w-[87%] col-start-1 row-start-1 w-[95%] justify-self-start"
        plate={tablet}
        priority={priority}
        sizes="(min-width: 1100px) 38vw, 88vw"
      />
      <Device
        className="wide:w-[26%] col-start-1 row-start-1 w-1/4 justify-self-end"
        plate={phone}
        priority={priority}
        ring={ring}
        sizes="(min-width: 1100px) 150px, 24vw"
      />
    </div>
  );
}
