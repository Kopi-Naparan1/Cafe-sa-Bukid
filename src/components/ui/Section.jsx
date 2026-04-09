export default function Section({ children, className = "" }) {
  return (
    <section
      className={`mx-auto w-full max-w-6xl      px-6 md:px-10 lg:px-16 py-12 md:py-16 lg:py-24 text-dark ${className}`}
    >
      {children}
    </section>
  );
}
