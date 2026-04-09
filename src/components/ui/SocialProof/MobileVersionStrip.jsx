export default function MobileVersionStrip({ trustMetricItems, index, prev }) {
  return (
    <div className="md:hidden relative h-10 overflow-hidden ">
      {trustMetricItems.map((item, i) => {
        const Icon = item.icon;
        const isCurrent = i === index;
        const isPrev = i === prev;
        const isInvolved = isCurrent || isPrev;

        return (
          <div
            key={item.label}
            className={`  
  absolute inset-0 flex flex-row items-center gap-1   
  ${isInvolved ? "transition-transform duration-500 ease-in-out" : "transition-none"}
  ${isCurrent ? "translate-x-0" : isPrev ? "-translate-x-full" : "translate-x-full"}
`}
          >
            <Icon
              className={`shrink-0 ml-[.11rem] h-4 w-4 ${isCurrent ? "text-dark" : "text-dark/50"}`}
            />
            <p className=" tabular-nums text-sm text-dark">{item.metric}</p>
            <p className="text-sm text-dark/70">{item.label}</p>
          </div>
        );
      })}
    </div>
  );
}
