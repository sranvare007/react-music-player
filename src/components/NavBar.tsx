import React from 'react'
import {GiMusicalNotes} from 'react-icons/gi';

export default function NavBar() {
  return (
    <div className={`flex flex-row items-center bg-[#7B2869] w-full text-white`}>
        <GiMusicalNotes size={40} className={`-mb-4`} />
            <p className={`font-dancing-script text-3xl px-4 py-5`}>Sangeet</p>
        <GiMusicalNotes size={40} className={`-mt-4`} />
    </div>
  )
}
