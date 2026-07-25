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

export function ProductStatus({
  className,
  explanation,
  status,
}: ProductStatusProps) {
  const definition = productStatuses[status];

  return (
    <span
      className={classNames(
        "product-status rounded-status inline-flex max-w-full flex-wrap items-center gap-x-2 gap-y-1 border px-3 py-1.5 text-sm",
        className,
      )}
      data-product-status={status}
    >
      <span className="font-bold">
        <span className="sr-only">Product status: </span>
        {definition.label}
      </span>
      {explanation ? (
        <span className="text-[0.8125rem] leading-5">{explanation}</span>
      ) : null}
    </span>
  );
}
