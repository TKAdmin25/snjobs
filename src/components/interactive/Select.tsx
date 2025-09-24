export const Select = ({
  options = [],
  label,
  className,
  ...props
}: {
  options: { label: string; value: string }[];
  className?: string;
  label: string;
} & React.SelectHTMLAttributes<HTMLSelectElement>) => {
  return (
    <div className="relative">
      <label
        className="absolute -top-2 left-2 bg-white px-1 text-[10px] lg:text-sm lg:-top-2.5"
        htmlFor={props.id}
      >
        {label}
      </label>
      <select
        className={`rounded-sm border border-black/15 px-3 py-1.5 h-full w-full ${className}`}
        {...props}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
