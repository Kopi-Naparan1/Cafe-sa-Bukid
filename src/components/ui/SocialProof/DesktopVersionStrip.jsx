export default function DesktopVersionStrip({ slots }) {
  return (
    <div className="hidden md:flex gap-6 mt-6">
      {slots.map((item, i) => {
        const Icon = item.icon;
        const isHighlighted = i === 0;
        const isEntering = i === 2; // rightmost always "just arrived"

        return (
          <div
            key={item.label} // key on label, not index — drives the animation
            className={`
        flex-1 flex flex-row items-center gap-2 py-1 px-4 rounded-xl
        transition-all duration-500 ease-in-out
        ${
          isHighlighted
            ? "opacity-100 scale-100 bg-primary/8 border border-primary/20"
            : i === 1
              ? "opacity-50 scale-95"
              : "opacity-20 scale-90"
        }
      `}
          >
            <Icon
              className={`shrink-0 ${isHighlighted ? "h-5 w-5 text-dark" : "h-3 w-3 text-dark/50"}`}
            />
            <p
              className={`font-bold tabular-nums ${isHighlighted ? "text-lg text-dark" : "text-xs text-dark/60"}`}
            >
              {item.metric}
            </p>
            <p
              className={`text-xs ${isHighlighted ? "text-dark/70" : "text-dark/40"}`}
            >
              {item.label}
            </p>
          </div>
        );
      })}
    </div>
  );
}
