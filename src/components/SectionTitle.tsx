type SectionTitleProps = {
  title: string;
};

export default function SectionTitle({ title }: SectionTitleProps) {
  return <h3 className="text-center text-2xl font-bold mb-5">{title}</h3>;
}
