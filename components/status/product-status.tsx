import {
  productStatuses,
  type ProductStatusName,
} from "@/lib/content/product-status";
import { classNames } from "@/lib/utilities/class-names";

export type ProductStatusProps = {
  className?: string;
  explanation?: string;
  status: ProductStatusName;
};

/**
 * A controlled product status, always as visible text with a screen-reader
 * prefix, never colour alone. The 1b design shows it as plain bold text.
 */
export function ProductStatus({
  className,
  explanation,
  status,
}: ProductStatusProps) {
  const definition = productStatuses[status];

  return (
    <span
      className={classNames("product-status inline", className)}
      data-product-status={status}
    >
      <span className="font-semibold">
        <span className="sr-only">Product status: </span>
        {definition.label}
      </span>
      {explanation ? <span> {explanation}</span> : null}
    </span>
  );
}
