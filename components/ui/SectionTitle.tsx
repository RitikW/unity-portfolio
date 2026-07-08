type Props = {
  subtitle: string;
  title: string;
};

export default function SectionTitle({ subtitle, title }: Props) {
  return (
    <>
      <p className="mb-3 uppercase tracking-[0.35em] text-blue-400">
        {subtitle}
      </p>

      <h2 className="mb-16 text-5xl font-bold text-white">
        {title}
      </h2>
    </>
  );
}