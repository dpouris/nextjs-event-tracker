import Link from "next/link";
import React from "react";
import { AiFillAppstore } from "react-icons/ai";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-slate-800 flex justify-between py-3 px-5 shadow-lg">
        <Link href="/">
          <button className="text-white text-2xl hover:text-emerald-200">
            nextEvents
          </button>
        </Link>

        <Link href="/events">
          <button className="text-white hover:text-emerald-300 flex items-center gap-1">
            Browse All Events
            <AiFillAppstore />
          </button>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
