export const PrimaryLink = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  return (
    <a
      className={`bg-primary text-white px-3 py-1.5 border border-solid border-primary rounded-sm ${className}`}
      {...props}
    >
      {children}
    </a>
  );
};
