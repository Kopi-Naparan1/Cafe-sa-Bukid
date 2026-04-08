export default function Section({ children, className = "" }) {
  return (
    <section
      className={`mx-auto w-full max-w-6xl px-4 md:px-6 lg:px-8 pt-8  pb-10 md:py-20 lg:py-24 ${className}`}
    >
      {children}
    </section>
  );
}
