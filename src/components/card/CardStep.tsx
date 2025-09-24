export const CardStep = ({
  number,
  title,
  description
}: {
  number: number;
  title: string;
  description: string;
}) => {
  return (
    <article className="border border-black/15 p-4">
      <div className="rounded-full border-4 border-solid border-primary-dark p-2 flex items-center justify-center w-16 h-16 mx-auto mb-4">
        <span className="text-primary-dark font-semibold text-[44px] leading-[0]">
          {number}
        </span>
      </div>
      <h3 className="text-3xl text-center mb-2">{title}</h3>
      <p className="text-gray-700 text-center mb-4">{description}</p>
    </article>
  );
};
