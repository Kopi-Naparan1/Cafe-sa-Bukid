import Image from "next/image";
import { Star } from "lucide-react";

export default function DesktopVersionTestimonial({
  testimonials,
  flippedIndex,
  setFlippedIndex,
}) {
  return (
    <div className="hidden md:flex md:gap-4 items-stretch">
      {testimonials.map((item, index) => {
        const isFlipped = flippedIndex === index;

        return (
          <div
            key={item.name}
            className="flex-1 perspective-[1000px] transition-all duration-300 hover:-translate-y-1 "
            // ← no onClick on card
          >
            {/* STATIC TITLE */}
            <div className="bg-secondary-light rounded-t-xl py-2.5 text-sm font-bold text-background/70 px-5 ring-1 ring-secondary/90 truncate">
              {item.title}
            </div>

            {/* FLIP AREA */}
            <div className="relative" style={{ height: "350px" }}>
              <div
                className={`
          absolute inset-0
          transition-transform duration-500
          transform-3d
          ${isFlipped ? "rotate-y-180" : ""}
        `}
              >
                {/* FRONT */}
                <div className="absolute inset-0 backface-hidden bg-secondary/30 rounded-b-2xl px-5 py-4 flex flex-col gap-3 ring-1 ring-secondary/90">
                  {/* Profile */}
                  <div className="flex items-center gap-3 shrink-0">
                    <Image
                      alt={`${item.name} picture`}
                      src={item.pic}
                      width={52}
                      height={52}
                      className="rounded-full object-cover ring-2 ring-secondary/80 shrink-0"
                    />
                    <div className="min-w-0">
                      <p className="font-bold text-sm leading-tight truncate">
                        {item.name}
                      </p>
                      <div className="flex gap-0.5 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-3 w-3 fill-accent text-accent"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Scrollable description */}
                  <p className="text-sm leading-relaxed text-dark/80 flex-1 overflow-y-auto overscroll-contain pr-1 custom-scroll">
                    {item.description}
                  </p>

                  {/* Flip trigger */}
                  <button
                    onClick={() => setFlippedIndex(isFlipped ? null : index)}
                    className="
              shrink-0 w-full flex items-center justify-center gap-1.5
              pt-2.5 border-t border-secondary/20
              text-xs text-dark/40 hover:text-dark/70
              transition-colors duration-150 cursor-pointer
              group
            "
                  >
                    <span>See photo</span>
                    <span className="group-hover:translate-x-0.5 transition-transform duration-150">
                      ↩
                    </span>
                  </button>
                </div>

                {/* BACK */}
                <div className="absolute inset-0 rotate-y-180 backface-hidden rounded-b-2xl overflow-hidden">
                  <Image
                    src={item.clickedPicture}
                    alt="clicked view"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/10 to-transparent" />

                  {/* Bottom bar */}
                  <div className="absolute bottom-0 inset-x-0 px-4 py-3 flex items-center gap-2">
                    <div className="flex items-center gap-2 min-w-0 flex-1">
                      <Image
                        src={item.pic}
                        alt={item.name}
                        width={30}
                        height={30}
                        className="rounded-full ring-2 ring-white/70 object-cover shrink-0"
                      />
                      <span className="text-white text-xs font-semibold drop-shadow-sm truncate">
                        {item.name}
                      </span>
                    </div>
                    <button
                      onClick={() => setFlippedIndex(null)}
                      className="shrink-0 text-white/55 text-xs hover:text-white/90 transition-colors duration-150 cursor-pointer"
                    >
                      ↩ back
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
