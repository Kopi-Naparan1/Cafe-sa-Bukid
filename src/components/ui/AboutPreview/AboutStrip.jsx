"use client";
import AboutStripDesktop from "./AboutStripDesktop";
import AboutStripMobile from "./AboutStripMobile";
import { useState, useEffect } from "react";
import { Leaf, MapPin, Truck } from "lucide-react";

const stripItems = [
  {
    id: 1,
    icon: Leaf,
    label: "Rooted in Bukidnon",
  },
  {
    id: 2,
    icon: MapPin,
    label: "Proudly local. Naturally fresh.",
  },
  {
    id: 3,
    icon: Truck,
    label: "From farm to table, the Bukid way.",
  },
];

const len = stripItems.length;

export default function AboutStrip() {
  const [index, setIndex] = useState(0);
  const [prev, setPrev] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((cur) => {
        setPrev(cur);
        return (cur + 1) % len;
      });
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <AboutStripDesktop
        stripItems={stripItems}
        index={index}
        prev={prev}
      ></AboutStripDesktop>
      <AboutStripMobile
        stripItems={stripItems}
        index={index}
        prev={prev}
      ></AboutStripMobile>
    </>
  );
}
