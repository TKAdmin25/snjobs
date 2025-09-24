export const JobTrait = ({
  children,
  value
}: {
  children: React.ReactNode;
  value: string | null;
}) => {
  if (!value) return null;
  return (
    <span className="inline text-muted text-xs mr-2 font-semibold">
      {children} <span>{value}</span>
    </span>
  );
};
