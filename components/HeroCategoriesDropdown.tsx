"use client";
import React, { useState, useRef, MouseEvent } from "react";

type Category = {
  id: string;
  title: string;
  link: string;
  childrens?: Category[];
};

type HeroCategoriesDropdownProps = {
  categories: Category[];
};

const HeroCategoriesDropdown: React.FC<HeroCategoriesDropdownProps> = ({
  categories,
}) => {
  const [activePath, setActivePath] = useState<string[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const hoverCategory = (level: number, id: string) => {
    setActivePath((prev) => {
      const newPath = [...prev];
      newPath[level] = id;
      return newPath.slice(0, level + 1);
    });
  };

  const handleMouseLeave = (e: MouseEvent<HTMLDivElement>) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.relatedTarget as Node)
    ) {
      setActivePath([]);
    }
  };

  const renderCategories = (categories: Category[], level = 0): JSX.Element => {
    return (
      <div
        className={`bg-white flex flex-col gap-y-[5px] pt-2 shadow h-[382px] min-w-[200px] transition-transform duration-300 ${
          level > 0
            ? "absolute left-[100%] top-0 translate-x-[-20px] opacity-0"
            : ""
        } ${activePath[level - 1] ? "translate-x-0 opacity-100" : ""}`}
      >
        {categories.map((category) => (
          <div key={category.id} className="w-full">
            <a
              href={category.link}
              onMouseEnter={() => {
                if (category.childrens) {
                  hoverCategory(level, category.id);
                }
              }}
              className={`px-4 py-1 cursor-pointer flex justify-between items-center gap-x-4 ${
                activePath[level] === category.id
                  ? "text-primary"
                  : "text-black"
              } hover:text-primary duration-300 group mr-4`}
            >
              <span className="text-xs">{category.title}</span>
              <div
                className={`${
                  category.childrens || activePath[level] === category.id
                    ? "opacity-100"
                    : "opacity-0"
                } w-[6px] h-[6px] border-t-[1.5px] border-r-[1.5px] rotate-45 group-hover:border-primary duration-300 group-hover:rotate-[225deg] ${
                  activePath[level] === category.id &&
                  "rotate-[225deg] !border-primary"
                } border-black`}
              ></div>
            </a>
            {activePath[level] === category.id &&
              category.childrens &&
              renderCategories(category.childrens, level + 1)}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div
      ref={dropdownRef}
      className="w-full h-[382px] z-[999] overflow-hidden absolute top-0 hidden lg:block"
      onMouseLeave={handleMouseLeave}
    >
      <div className="max-w-[1200px] mx-auto relative h-[382px]  ">
        <div className="absolute top-0 left-0">
          {renderCategories(categories)}
        </div>
      </div>
    </div>
  );
};

export default HeroCategoriesDropdown;
