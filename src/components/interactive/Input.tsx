export const Input = ({
  children,
  label,
  ...props
}: {
  label?: string;
  children?: React.ReactNode;
} & React.InputHTMLAttributes<HTMLInputElement>) => {
  const hasIcon = !!children;
  const hasLabel = !!label;
  return (
    <div>
      {hasLabel && <label className="text-gray-600 mb-2 block">{label}</label>}
      <div className="bg-white rounded-sm border border-black/15 flex items-center">
        {hasIcon && <div className="px-3 py-1.5">{children}</div>}
        <input
          className={`w-full focus:outline-none py-1.5 placeholder:text-black/60 ${
            hasIcon ? "pr-3" : "px-3"
          }`}
          type={props.type ?? "text"}
          id={props.id ?? props.name}
          name={props.name ?? props.id}
          {...props}
        />
      </div>
    </div>
  );
};
