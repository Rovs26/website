import Image, { getImageProps } from "next/image";

import { classNames } from "@/lib/utilities/class-names";

type Source = { height: number; src: string; width: number };

/**
 * The "Made for the counter" photo: 16:9 from 640px up, a 4:5 crop of the
 * same photo on phones. One <img>, so one alt text and one download.
 */
export function ArtDirectedPhoto({
  alt,
  caption,
  captionClassName,
  narrow,
  wide,
}: {
  alt: string;
  caption: string;
  captionClassName?: string;
  narrow: Source;
  wide: Source;
}) {
  const {
    props: { srcSet: wideSrcSet },
  } = getImageProps({
    alt,
    ...wide,
    sizes: "(min-width: 1440px) 1280px, 90vw",
  });
  const {
    props: { srcSet: narrowSrcSet, ...image },
  } = getImageProps({ alt, ...narrow, sizes: "90vw" });

  return (
    <figure className="m-0 flex flex-col gap-3">
      <picture>
        <source
          height={wide.height}
          media="(min-width: 640px)"
          srcSet={wideSrcSet}
          width={wide.width}
        />
        {/* Art direction needs <picture>; getImageProps supplies next/image's optimised URLs. */}
        <img
          {...image}
          alt={alt}
          className="block h-auto w-full"
          srcSet={narrowSrcSet}
        />
      </picture>
      <figcaption
        className={classNames("text-caption font-medium", captionClassName)}
      >
        {caption}
      </figcaption>
    </figure>
  );
}

/** A single illustration with its caption. */
export function Photo({
  alt,
  caption,
  height,
  sizes,
  src,
  width,
}: Source & { alt: string; caption: string; sizes: string }) {
  return (
    <figure className="m-0 flex flex-col gap-2.5">
      <Image
        alt={alt}
        className="block h-auto w-full"
        height={height}
        sizes={sizes}
        src={src}
        width={width}
      />
      <figcaption className="text-caption text-secondary font-medium">
        {caption}
      </figcaption>
    </figure>
  );
}
