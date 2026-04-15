export default function AboutStripDesktop({ stripItems, index, prev }) {
  return (
    <div className=" hidden relative h-8 overflow-hidden rounded-2xl border border-dark/60 bg-secondary/30 px-4  shadow-lg backdrop-blur-sm md:block">
      {stripItems.map((item, i) => {
        const Icon = item.icon;
        const isCurrent = i === index;
        const isPrev = i === prev;
        const isInvolved = isCurrent || isPrev;

        return (
          <div
            key={item.id}
            className={`
              absolute inset-0 flex items-center gap-3 px-4
              ${isInvolved ? "transition-transform duration-500 ease-in-out" : "transition-none"}
              ${isCurrent ? "translate-x-0" : isPrev ? "-translate-x-full" : "translate-x-full"}
            `}
          >
            <Icon
              className={`shrink-0 h-4 w-4 ${isCurrent ? " text-background/60" : " text-background/40"}`}
            />

            <p className="truncate whitespace-nowrap text-xs leading-none text-background/70">
              {item.label}
            </p>
          </div>
        );
      })}
    </div>
  );
}
