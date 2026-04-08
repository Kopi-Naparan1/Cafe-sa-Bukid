export default function Section({ children, className = "" }) {
  return (
    <section
      className={`mx-auto w-full max-w-6xl px-4 md:px-6 lg:px-8 py-8 md:py-10 lg:py-12 ${className}`}
    >
      {children}
    </section>
  );
}
