export const PrimaryButton = ({
  children,
  className = "",
  ...props
}: {
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button
      className={`bg-primary text-white px-3 py-1.5 border border-solid border-primary rounded-sm ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
