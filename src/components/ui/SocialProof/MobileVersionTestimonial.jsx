import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";

export default function MobileVersionTestimonial({
  testimonials,
  flippedIndex,
  setFlippedIndex,
}) {
  const [activeDescriptionIndex, setActiveDescriptionIndex] = useState(null);
  const descriptionRefs = useRef([]);

  useEffect(() => {
    function handleDocumentClick(event) {
      const tappedDescriptionIndex = descriptionRefs.current.findIndex((node) =>
        node?.contains(event.target),
      );

      setActiveDescriptionIndex(
        tappedDescriptionIndex === -1 ? null : tappedDescriptionIndex,
      );
    }

    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, []);

  return (
    <div className="relative md:hidden">
      <div className="flex gap-3 overflow-x-auto snap-x snap-mandatory pt-3 pb-4 px-4 ">
        {testimonials.map((item, index) => {
          const isFlipped = flippedIndex === index;
          const isDescriptionActive = activeDescriptionIndex === index;

          return (
            <div
              key={item.name}
              className="w-[72vw] max-w-70 snap-center shrink-0 perspective-[1000px] transition-transform duration-150 "
              // ← no onClick here anymore
            >
              {/* STATIC TITLE */}
              <div className="bg-secondary rounded-t-2xl py-2 px-4 font-bold text-background/70 ring-1 ring-secondary/90 text-sm truncate">
                {item.title}
              </div>

              {/* FLIP AREA */}
              <div className="relative " style={{ height: "350px" }}>
                <div
                  className={`
        absolute inset-0

        transition-transform duration-500
        transform-3d
        ${isFlipped ? "rotate-y-180" : ""}
      `}
                >
                  {/* FRONT */}
                  <div className="absolute inset-0 backface-hidden shadow-[0_4px_12px_-2px_rgba(0,0,0,0.3)] bg-secondary/30 rounded-b-2xl px-4 py-4 flex flex-col gap-3 ring-1 ring-secondary/90">
                    <div className="flex items-center gap-3 shrink-0">
                      <Image
                        alt={`${item.name} picture`}
                        src={item.pic}
                        width={42}
                        height={42}
                        className="rounded-full object-cover ring-2 ring-secondary/80 shrink-0"
                      />
                      <div className="min-w-0">
                        <p className="font-bold text-sm leading-tight truncate">
                          {item.name}
                        </p>
                        <div className="flex gap-0.5 mt-0.5">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-3 w-3 fill-accent text-accent"
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Scrollable description — no clamp */}
                    <p
                      ref={(node) => {
                        descriptionRefs.current[index] = node;
                      }}
                      className={`text-sm leading-relaxed text-dark/80 flex-1 pr-1 custom-scroll ${
                        isDescriptionActive
                          ? "overflow-y-auto overscroll-contain"
                          : "overflow-hidden"
                      }`}
                    >
                      {item.description}
                    </p>

                    {/* Flip trigger — ONLY this flips */}
                    <button
                      onClick={() => {
                        setActiveDescriptionIndex(null);
                        setFlippedIndex(isFlipped ? null : index);
                      }}
                      className="flex items-center justify-end gap-1 pt-2 border-t border-secondary/20 shrink-0 w-full cursor-pointer active:opacity-60 transition-opacity"
                    >
                      <span className="text-xs text-dark/35">
                        Tap to see photo ↩
                      </span>
                    </button>
                  </div>

                  {/* BACK */}
                  <div className="absolute inset-0 rotate-y-180 shadow-[0_4px_12px_-2px_rgba(0,0,0,0.3)] backface-hidden rounded-b-2xl overflow-hidden">
                    <Image
                      src={item.clickedPicture}
                      alt="clicked view"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 inset-x-0 px-3 py-3 flex items-center gap-2">
                      {/* Avatar + name — constrained so it can't push the button out */}
                      <div className="flex items-center gap-2 min-w-0 flex-1">
                        <Image
                          src={item.pic}
                          alt={item.name}
                          width={26}
                          height={26}
                          className="rounded-full ring-2 ring-white/70 object-cover shrink-0"
                        />
                        <span className="text-white text-xs font-semibold drop-shadow-sm truncate">
                          {item.name}
                        </span>
                      </div>

                      {/* Flip back trigger — never shrinks */}
                      <button
                        onClick={() => {
                          setActiveDescriptionIndex(null);
                          setFlippedIndex(null);
                        }}
                        className="shrink-0 text-white/55 text-xs active:opacity-60 transition-opacity cursor-pointer"
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
      {/* Scroll dots
      <div className="flex justify-center gap-1.5 mt-1">
        {testimonials.map((_, i) => (
          <div
            key={i}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i === (flippedIndex ?? 0)
                ? "w-4 bg-secondary"
                : "w-1.5 bg-dark/20"
            }`}
          />
        ))}
      </div> */}
    </div>
  );
}
