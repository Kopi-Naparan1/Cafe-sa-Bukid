import Image from "next/image";

export default function FoodDesktop({ foods, flippedIndex, setFlippedIndex }) {
  return (
    <div className="hidden md:grid md:grid-cols-3 md:gap-4 lg:gap-6">
      {foods.map((item, index) => {
        const isFlipped = flippedIndex !== index;

        return (
          <div
            key={item.id}
            className="perspective-[1000px] min-w-0 w-full transition-all duration-300 hover:-translate-y-1 group"
            // ← no onClick on card
          >
            {/* STATIC TITLE */}
            <div className="flex items-center justify-between bg-secondary-light px-4 py-3  rounded-t-xl ring-1 ring-secondary/90">
              {/* Name */}
              <h3 className="text-sm font-semibold leading-tight   text-background/80  truncate">
                {item.name}
              </h3>

              {/* Price */}
              <span className="text-xs text-background/60 font-bold tracking-wide bg-secondary-light/50 group-hover:bg-background/85 group-hover:text-dark/85 transition-background duration-150 ease-in-out px-2 py-1 rounded-full ring-2 ring-background/20">
                ₱ {item.price}
              </span>
            </div>

            {/* FLIP AREA */}
            <div className="relative h-[clamp(20rem,34vw,28rem)] w-full">
              <div
                className={`
          absolute inset-0
          transition-transform duration-500

          transform-3d
          ${isFlipped ? "rotate-y-180" : ""}
        `}
              >
                {/* FRONT */}
                <div className="absolute inset-0 rotate-y-180 backface-hidden rounded-b-2xl overflow-hidden shadow-[0_4px_12px_-2px_rgba(0,0,0,0.4)]">
                  <Image
                    src={item.image}
                    alt="clicked view"
                    fill
                    loading="lazy"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/65 via-black/10 to-transparent" />

                  {/* Bottom bar */}
                  <div className="absolute bottom-0 inset-x-0 px-4 py-3 flex items-center gap-2">
                    <div className="flex items-center gap-2 min-w-0 flex-1">
                      <span className="text-background/80  backdrop-blur-md bg-secondary-light/40 px-2 py-1 border-dark/30 rounded-full border text-xs font-semibold drop-shadow-sm truncate">
                        {item.tag}
                      </span>
                    </div>
                    <button
                      onClick={() => setFlippedIndex(index)}
                      className="shrink-0 text-white/55 text-xs hover:text-white/90 transition-colors duration-150 cursor-pointer"
                    >
                      ↩ More Details
                    </button>
                  </div>
                </div>
                {/* BACK */}
                <div className="absolute inset-0 backface-hidden bg-secondary/30 rounded-b-2xl px-5 py-4 flex flex-col gap-3 ring-1 shadow-[0_4px_12px_-2px_rgba(0,0,0,0.4)] ring-secondary/90">
                  {/* Scrollable description */}
                  <div className="text-sm leading-relaxed text-dark/80 flex-1 overflow-y-auto overscroll-contain pr-1 custom-scroll">
                    <div className="flex flex-col mb-2">
                      <span className="text-dark font-semibold">
                        Why you’ll love it:
                      </span>

                      <span className="ml-2"> {item.description}</span>
                    </div>
                    <div className="flex flex-col mb-2">
                      <span className="text-dark font-semibold">
                        Ingredients:
                      </span>

                      <ul className="ml-2">
                        {" "}
                        {item.ingredients.map((ingredient) => (
                          <li key={ingredient} className="block">
                            {ingredient}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-col mb-2">
                      <span className="text-dark font-semibold">
                        Pairs well with:
                      </span>

                      <span className="ml-2"> {item.pairWith}</span>
                    </div>
                    <div className="flex flex-col mb-2">
                      <span className="text-dark font-semibold">
                        Estimated wait:
                      </span>

                      <span className="ml-2"> {item.makingTime}</span>
                    </div>
                  </div>

                  {/* Flip trigger */}
                  <button
                    onClick={() => setFlippedIndex("all")}
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
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
