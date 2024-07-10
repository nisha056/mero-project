import { Menu } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const menu = [
    {
      name: "HOME",
      link: "/",
    },
    {
      name: "ABOUT",
      link: "/about",
    },
    {
      name: "EXPERIENCE",
      link: "/experience",
    },
    // {
    //   name: "PROJECT",
    //   link: "/project",
    // },
    {
      name: "CONTACT",
      link: "/contact",
    },
  ];

  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className="sticky bg-[#a7a5c6] top-0 z-10 shadow-md shadow-[#5d707f]">
      <nav className="w-full xl:w-[1200px] mx-auto flex justify-between items-center h-20 px-4">
        <div className="logo-wrapper text-3xl font-bold">
          <Link to="/">Hello!</Link>
        </div>
        <div className="hidden md:flex items-center gap-5 font-medium text-lg">
          {menu.map((item) => (
            <Link to={item.link} className="opacity-70 hover:opacity-100">
              {item.name}
            </Link>
          ))}
          <Link to={"/resume"}>
            <button className="py-2 px-4 rounded-xl bg-red-500 text-white hover:text-red-500 hover:bg-white">
              Resume
            </button>
          </Link>
        </div>
        <button
          className="block md:hidden"
          onClick={() => setShowMenu(!showMenu)}
        >
          <Menu size={32} />
        </button>

        {showMenu && (
          <div className="md:hidden fixed top-24 right-4 bg-[#a7a5c6] py-5 z-10 rounded-lg">
            <div className="w-[250px] sm:w-[300px] flex flex-col items-center justify-center gap-1">
              {menu.map((item) => (
                <Link
                  to={item.link}
                  className="w-full text-center hover:opacity-100 hover:bg-[#c7c4ee] text-lg py-2"
                  onClick={() => setShowMenu(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link to={"/resume"} onClick={() => setShowMenu(false)}>
                <button className="py-2 px-8 my-1 rounded-xl bg-red-500 text-white hover:text-red-500 hover:bg-white">
                  Resume
                </button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
