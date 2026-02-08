type LinkButtonProps = {
  children: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function LinkButton({ children, ...props }: LinkButtonProps) {
  return (
    <a
      className="text-sm font-bold text-white bg-[#201F24] py-4 rounded-md transition-colors duration-150 hover:bg-gray-500 active:bg-gray-300"
      {...props}
    >
      {children}
    </a>
  );
}
