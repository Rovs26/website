/** The opening of each subpage: a display heading and one lead line. */
export function PageHero({
  heading,
  id,
  introduction,
}: {
  heading: string;
  id: string;
  introduction: string;
}) {
  return (
    <section
      aria-labelledby={id}
      className="px-gutter wide:grid-cols-2 grid items-end gap-x-16 gap-y-5 pt-[clamp(1.5rem,4.4vw,4rem)] pb-[clamp(2.5rem,5.5vw,5rem)]"
    >
      <h1 className="text-display" id={id}>
        {heading}
      </h1>
      <p className="text-lead max-w-[36.25rem] font-medium text-pretty">
        {introduction}
      </p>
    </section>
  );
}
