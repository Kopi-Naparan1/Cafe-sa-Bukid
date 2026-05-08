"use client";
import { useState } from "react";
import Image from "next/image";
import useMenuData from "./data/menuData";
import mockImage from "../../assets/best-sellers/italian-spaghetti.avif";
import { ChevronDown } from "lucide-react";

const menuItemsCategories = [
  { id: 0, name: "Drinks" },
  { id: 1, name: "Meals" },
  { id: 2, name: "Light Bites" },
  { id: 3, name: "Specials" },
];

function chevronDown() {}

export default function MenuItems() {
  const [activeCategory, setActiveCategory] = useState(
    menuItemsCategories[0].id,
  );

  const [activeItem, setActiveItem] = useState(null);

  function toggleItem(itemId) {
    setActiveItem((prev) => (prev === itemId ? null : itemId));
  }

  const menuData = useMenuData();
  let currentCategoryData = menuData[activeCategory].data;

  return (
    <div className="min-h-[90vh] bg-secondary-light/30 w-full rounded-2xl overflow-hidden ">
      {/* CATEGORY NAV */}
      <div
        className="
          sticky top-0 z-20
          bg-secondary-light/70 backdrop-blur
          border-b border-primary/10
        "
      >
        <div
          className="
            max-w-content mx-auto
            px-6 py-4
            flex justify-center
          "
        >
          <div
            className="
    grid grid-cols-2
    rounded-2xl
    gap-[clamp(0.4rem,2vw,0.75rem)]
    bg-background/60
    p-[clamp(0.5rem,2vw,0.9rem)]

    md:flex md:flex-row
    md:rounded-full
  "
          >
            {menuItemsCategories.map((category) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(category.id)}
                className={`
        px-[clamp(0.75rem,3vw,1.2rem)]
        py-[clamp(0.45rem,2vw,0.7rem)]
        md:px-5 md:py-2

        text-[clamp(0.8rem,2.8vw,0.95rem)]
        font-medium

        rounded-full
        text-center
        justify-center

        transition-all duration-200

        ${
          category.id === activeCategory
            ? "bg-accent text-background shadow-sm"
            : "text-dark/60 hover:text-dark hover:bg-background/80"
        }
      `}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* DESKTOP */}
      <div className="md:grid hidden lg:grid max-w-content mx-auto px-6 py-12 gap-6  ">
        {menuData.map((category) => {
          if (activeCategory !== category.id) return null;

          return category.data.map((section) => (
            <div key={section.category} className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold mb-2  ">
                {section.category}
              </h2>

              <div className="pl-4 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-6 md:mb-6">
                {section.items.map((item) => (
                  <div
                    key={item.id}
                    className="bg-background/60 flex flex-col p-4 rounded-lg shadow-sm"
                  >
                    <Image
                      src={mockImage}
                      alt={item.name}
                      className="w-full h-48 object-cover rounded-lg mb-4"
                    />

                    <h3 className="text-md font-bold mb-2">{item.name}</h3>

                    <p className="text-lg font-bold bg-secondary-light rounded-xl px-2 py-0.5 text-background/80 inline-flex w-fit">
                      ₱{item.price.toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ));
        })}
      </div>

      {/* MOBILE */}
      <div className="md:hidden flex flex-col  max-w-content mx-auto px-6 py-12 gap-6  ">
        {menuData.map((category) => {
          if (activeCategory !== category.id) return null;

          return category.data.map((section) => (
            <div key={section.category} className="flex flex-col gap-4">
              <h2 className="text-lg font-semibold mb-2  ">
                {section.category}
              </h2>

              <div className="pl-1 grid grid-cols-1 gap-2  ">
                {section.items.map((item) => {
                  const isOpen = activeItem === item.id;

                  return (
                    <div
                      onClick={() => toggleItem(item.id)}
                      key={item.id}
                      className="bg-background/60 flex flex-row items-center p-2 rounded-lg shadow-sm"
                    >
                      <div>
                        <h3 className="text-md font-bold mb-2">{item.name}</h3>

                        <div
                          className={`
    overflow-hidden
    transition-all duration-150 ease-in-out
    ${isOpen ? "max-h-40 opacity-100 mb-4" : "max-h-0 opacity-0"}
  `}
                        >
                          <Image
                            src={mockImage}
                            alt={item.name}
                            className="w-[95%] h-[clamp(7rem,22vw,10rem)]   rounded-lg object-cover"
                          />
                        </div>

                        <p
                          className={`
  text-sm font-bold text-accent
  transition-colors duration-150
  ${
    isOpen
      ? "bg-secondary-light rounded-md px-2 py-1 text-background/80 inline-flex w-fit"
      : ""
  }
`}
                        >
                          ₱{item.price.toFixed(2)}
                        </p>
                      </div>
                      <ChevronDown
                        className={`ml-auto justify-center shrink-0  transition-transform duration-100
    ${isOpen ? "rotate-180" : "rotate-0"}`}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          ));
        })}
      </div>
    </div>
  );
}
