import DesktopVeresionStrip from "./DesktopVersionStrip";
import MobileVersionStrip from "./MobileVersionStrip";

export default function Strip({ slots, trustMetricItems, index, prev }) {
  return (
    <>
      <DesktopVeresionStrip slots={slots}></DesktopVeresionStrip>
      <MobileVersionStrip
        trustMetricItems={trustMetricItems}
        index={index}
        prev={prev}
      ></MobileVersionStrip>
    </>
  );
}
// {/* Dots */}
// {/* <div className="flex justify-center gap-2 mt-4 md:justify-start">
//   {trustMetricItems.map((_, i) => (
//     <button
//       key={i}
//       onClick={() => {
//         setPrev(index);
//         setIndex(i);
//       }}
//       aria-label={`Go to ${trustMetricItems[i].label}`}
//       className={`h-1.5 rounded-full transition-all duration-300 ${
//         i === index ? "w-6 bg-primary" : "w-1.5 bg-dark/20"
//       }`}
//     />
//   ))}
// </div> */}
