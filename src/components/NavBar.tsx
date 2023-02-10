import React, { useRef } from "react";
import { GiMusicalNotes } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import { useHistory } from "react-router-dom";

export default function NavBar() {
  const inputRef = useRef<HTMLInputElement>(null);
  const history = useHistory();

  return (
    <div
      className={`flex flex-row items-center justify-between bg-[#7B2869] w-full text-white px-4 rounded-bl-lg rounded-br-lg`}
    >
      <div
        className={`flex flex-row items-center`}
        onClick={() => {
          history.replace("/");
        }}
      >
        <GiMusicalNotes size={40} className={`-mb-4`} />
        <p className={`font-dancing-script text-3xl px-4 py-5`}>Sangeet</p>
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
          ref={inputRef}
          type={"text"}
          className={`border-none focus:outline-none text-black mx-3 font-large text-md font-sofia-sans`}
        />
      </div>
    </div>
  );
}
