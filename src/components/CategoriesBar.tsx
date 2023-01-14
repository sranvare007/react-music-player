import React, { useState } from "react";
import { CategoriesBarProps } from "../types/propsTypes";

export default function CategoriesBar({ categoriesList }: CategoriesBarProps) {
  const tabsList = categoriesList;
  const [activeTab, setActiveTab] = useState(categoriesList[0]);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  return (
    <div
      className={`flex flex-row w-full items-center px-6 py-4 justify-center border-b-2 border-[#0A2647] border-opacity-75`}
    >
      {tabsList.map((item, index) => (
        <p
          className={`mx-8 capitalize font-sofia-sans font-semibold text-lg hover:opacity-75 cursor-pointer ${
            activeTab == item ? "activeCategory" : null
          }`}
          key={index}
          id="category-type"
          onClick={() => {
            setActiveTab(item);
          }}
        >
          {item}
        </p>
      ))}
    </div>
  );
}
