type LinkButtonProps = {
  children: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function LinkButton({
  children,
  className = "",
  ...props
}: LinkButtonProps) {
  return (
    <a
      className={
        "inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring " +
        className
      }
      {...props}
    >
      {children}
    </a>
  );
}
