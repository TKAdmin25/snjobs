export const WrapperContentDelimiter = ({
  as: Component = "section",
  fullWidthContainerClassName,
  className,
  children,
  ariaLabelledBy,
  ariaDescribedBy
}: {
  as?: React.ElementType;
  fullWidthContainerClassName?: string;
  className?: string;
  children: React.ReactNode;
  ariaLabelledBy?: string;
  ariaDescribedBy?: string;
}) => {
  return (
    <div className={fullWidthContainerClassName}>
      <Component
        className={`w-full ${
          !className?.includes("max-w") ? "max-w-[1200px]" : ""
        } mx-auto px-2 md:px-4 lg:px-6 ${className}`}
        aria-labelledby={ariaLabelledBy}
        aria-describedby={ariaDescribedBy}
      >
        {children}
      </Component>
    </div>
  );
};
