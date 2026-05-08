import Image from "next/image";

export default function MobileVisitInformation({ items }) {
  return (
    <div className="md:hidden flex flex-col gap-4 w-full">
      {items.map((item) => (
        <div
          key={item.id}
          className="
            w-full
            rounded-2xl
            overflow-hidden
            bg-secondary-light/30
            border border-primary/10
            shadow-sm
          "
        >
          <div className="relative h-45">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-dark/60 via-dark/10 to-transparent" />
          </div>

          <div className="p-5 flex flex-col flex-1">
            <h3 className="font-semibold text-lg mb-3">{item.title}</h3>
            <p className="text-md leading-relaxed text-dark/70">
              {item.description1}
            </p>
            <p className="text-sm leading-relaxed text-dark/30 mt-auto pt-4">
              {item.description2}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
