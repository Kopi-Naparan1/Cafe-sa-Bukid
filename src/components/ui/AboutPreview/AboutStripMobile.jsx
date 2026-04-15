export default function AboutStripMobile({ stripItems, index, prev }) {
  return (
    <div className="relative h-9 overflow-hidden rounded-2xl border border-dark/60 bg-secondary/30  p-3 shadow-lg backdrop-blur-md md:hidden">
      {stripItems.map((item, i) => {
        const Icon = item.icon;
        const isCurrent = i === index;
        const isPrev = i === prev;
        const isInvolved = isCurrent || isPrev;

        return (
          <div
            key={item.id}
            className={`
              absolute inset-0 flex flex-row items-center gap-2 px-3
              ${isInvolved ? "transition-transform duration-500 ease-in-out" : "transition-none"}
              ${isCurrent ? "translate-x-0" : isPrev ? "-translate-x-full" : "translate-x-full"}
            `}
          >
            <Icon
              className={`shrink-0 h-4 w-4 ${isCurrent ? "text-background/60" : "text-background/40"}`}
            />

            <p className="text-xs leading-tight  text-background/70">
              {item.label}
            </p>
          </div>
        );
      })}
    </div>
  );
}
