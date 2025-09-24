import { PrimaryLink } from "../interactive/PrimaryLink";

export const CardCallToAction = ({
  title,
  description,
  link,
  children,
  tag,
  isCompact = false
}: {
  title: string;
  description: string;
  link: {
    label: string;
    href: string;
  };
  tag: string;
  children: React.ReactNode;
  isCompact?: boolean;
}) => {
  return (
    <article className="border border-solid border-black/15 p-4 bg-white">
      <div className="flex items-center gap-1 text-primary-dark">
        {children}
        <span className="uppercase font-semibold">{tag}</span>
      </div>
      <h3
        className={`${
          isCompact ? "text-3xl" : "text-[2.5rem]"
        } leading-[1.1] mb-3`}
      >
        {title}
      </h3>
      <p className="leading-6 text-gray-700 mb-4">{description}</p>
      <PrimaryLink className="inline-block mb-4" href={link.href}>
        {link.label}
      </PrimaryLink>
    </article>
  );
};
