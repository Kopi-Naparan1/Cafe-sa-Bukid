import Image from "next/image";

export default function DesktopWhyChooseUs({ items }) {
  return (
    <div className="hidden md:grid md:grid-cols-3 gap-6 w-full">
      {items.map((item) => (
        <div
          key={item.id}
          className="
            rounded-2xl
            overflow-hidden
            bg-secondary-light/30
            border border-primary/10
            shadow-sm
            hover:shadow-md
            transition-all duration-200
          "
        >
          <div className="relative h-55">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="p-6 flex flex-col  ">
            <h3 className="font-semibold text-lg mb-3">{item.title}</h3>
            <div>
              <p className="text-md leading-relaxed text-dark/70 whitespace-pre-line">
                {item.description1}
              </p>
              <p className="text-sm leading-relaxed text-dark/30 justify-end  pt-4">
                {item.description2}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
