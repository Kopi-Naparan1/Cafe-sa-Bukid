"use client";

import Section from "../ui/Section";
import { useEffect, useState } from "react";
import { Users, ThumbsUp, Star } from "lucide-react";
import pic1 from "../../app/assets/testimonial/pic1.png";
import pic2 from "../../app/assets/testimonial/pic2.png";
import pic3 from "../../app/assets/testimonial/pic3.png";
import clicked1 from "../../app/assets/testimonial/grok-sunset.jpg";
import clicked2 from "../../app/assets/testimonial/grok-ambiance.jpg";
import clicked3 from "../../app/assets/testimonial/grok-amazing-food.jpg";

import Testimonial from "../ui/SocialProof/Testimonials";
import Strip from "../ui/SocialProof/Strip";

const trustMetricItems = [
  { icon: Users, metric: "61K+", label: "Facebook Followers" },
  { icon: ThumbsUp, metric: "7,474", label: "Recommendations" },
  { icon: Star, metric: "4.6", label: "Google Maps Rating" },
];

const len = trustMetricItems.length;

const testimonials = [
  {
    name: "Busy Bien!",
    pic: pic3, // mock image
    title: "Relaxing Sunset",
    description:
      "A lovely place to relax and unwind while watching the sunset. The food was good and they use fresh ingredients! On weekdays, it’s less crowded so the area feels spacious. Will try other food soon.",
    clickedPicture: clicked1,
  },
  {
    name: "Rema Grace Gomez",
    pic: pic2, // mock image
    title: "Peaceful Ambiance",
    description:
      "Cafe sa Bukid in Bukidnon has a great ambiance with beautiful mountain views. The place is very peaceful and quiet, with cool winds that make you want to stay longer. The food was great and made with fresh ingredients—a truly relaxing experience.",
    clickedPicture: clicked2,
  },
  {
    name: "Rea Marphine Caballes-Murod",
    pic: pic1, // mock image
    title: "Amazing Food",
    description:
      "After a long roadtrip, this was the best pit stop! The food is amazing—must try their Beef Tapa and Chicken Lollipop. The true gem was their staff, very accommodating and courteous. Highly recommended!",
    clickedPicture: clicked3,
  },
];

export default function SocialProof() {
  const [index, setIndex] = useState(0);
  const [prev, setPrev] = useState(null);
  const [flippedIndex, setFlippedIndex] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((cur) => {
        setPrev(cur);
        return (cur + 1) % len;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  // The 3 slots are always: current, current+1, current+2
  const slots = [0, 1, 2].map(
    (offset) => trustMetricItems[(index + offset) % len],
  );

  return (
    <Section className="min-h-[50vh]  flex flex-col bg-secondary-light/30 rounded-2xl overflow-hidden max-h-[80vh] md:max-h-full">
      <span className="mb-3 text-xs font-medium uppercase tracking-[.16em] text-primary/60 md:mb-4">
        Loved by Locals
      </span>
      <h2 className="font-heading font-extrabold tracking-tight text-left text-[clamp(1.6rem,4vw,3rem)] leading-[1.1]">
        Why People Keep Coming Back
      </h2>
      <Strip
        slots={slots}
        trustMetricItems={trustMetricItems}
        index={index}
        prev={prev}
      ></Strip>

      {/* Testimonials */}
      <Testimonial
        testimonials={testimonials}
        flippedIndex={flippedIndex}
        setFlippedIndex={setFlippedIndex}
      ></Testimonial>
    </Section>
  );
}
