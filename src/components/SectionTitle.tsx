type SectionTitleProps = {
  title: string;
};

export default function SectionTitle({ title }: SectionTitleProps) {
  return <h2 className="text-center text-2xl font-bold mb-5">{title}</h2>;
}
