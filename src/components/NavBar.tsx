import React, { useEffect, useRef, useState } from "react";
import { GiMusicalNotes } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearchVal } from "../features/songList/searchVal";

export default function NavBar() {
  const inputRef = useRef<HTMLInputElement>(null);
  const history = useHistory();
  const [searchInput, setSearchInput] = useState("");
  const dispatch = useDispatch();

  return (
    <div
      className={`flex flex-row items-center justify-between bg-[#7B2869] w-full text-white px-4`}
    >
      <div
        className={`flex flex-row items-center cursor-pointer`}
        onClick={() => {
          history.replace("/");
        }}
      >
        <GiMusicalNotes size={40} className={`-mb-4`} />
        <p className={`font-dancing-script text-3xl px-4 py-6`}>Sangeet</p>
        <GiMusicalNotes size={40} className={`-mt-4`} />
      </div>
      <div
        className={`flex flex-row bg-white px-3 py-2 rounded-3xl`}
        onClick={() => {
          if (inputRef.current) {
            inputRef.current.focus();
          }
        }}
      >
        <BsSearch size={25} color="#000" />
        <input
          type={"text"}
          ref={inputRef}
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
          onKeyDown={(event) => {
            if (event.key === "Enter") {
              if (history.location.pathname.includes("search")) {
                dispatch(setSearchVal(searchInput));
              } else {
                dispatch(setSearchVal(searchInput));
                history.replace(`/search`);
              }
            }
          }}
          className={`border-none focus:outline-none text-black mx-3 font-large text-md font-sofia-sans`}
        />
      </div>
    </div>
  );
}
