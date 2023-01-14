import React, { useState } from "react";
import { CategoriesBarProps } from "../types/propsTypes";

export default function CategoriesBar({
  categoriesList,
  selectedCategory,
  setSelectedCategory,
}: CategoriesBarProps) {
  const tabsList = categoriesList;

  return (
    <div
      className={`flex flex-row w-full items-center px-6 py-4 justify-center border-b-[1px] border-[#0A2647] border-opacity-50`}
    >
      {tabsList.map((item, index) => (
        <p
          className={`mx-8 capitalize font-sofia-sans font-semibold text-lg hover:opacity-75 cursor-pointer ${
            selectedCategory == item ? "activeCategory" : null
          }`}
          key={index}
          id="category-type"
          onClick={() => {
            setSelectedCategory(item);
          }}
        >
          {item}
        </p>
      ))}
    </div>
  );
}
