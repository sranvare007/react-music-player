import React, { useState } from "react";

export default function CategoriesBar() {
  const tabsList = ["All", "Trending", "Playlist", "Charts"];
  const [activeTab, setActiveTab] = useState(tabsList[0]);

  return (
    <div
      className={`flex flex-row w-full items-center px-6 py-4 justify-center border-b-2 border-[#0A2647] border-opacity-75`}
    >
      {tabsList.map((item, index) => (
        <p
          className={`mx-8 font-sofia-sans font-semibold text-lg hover:opacity-75 cursor-pointer ${
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
