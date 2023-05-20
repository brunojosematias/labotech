import { useState } from "react";

import logo from "../../assets/logo.svg";
import menu from "../../assets/icons/menu.svg";
import close from "../../assets/icons/close.svg";

const logout = [
  { name: "O app", href: "#comments-app" },
  { name: "Exercícios personalizados", href: "#informations-exercises" },
  { name: "Os LaboInstrutores", href: "#instructors" },
  { name: "Log in", href: "/login", type: "log" },
  { name: "Sing up", href: "/cadastro", type: "sing" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function NavBar({ heightScroll, sizeHeight }) {
  const [toggle, setToggle] = useState(false);

  function handleToggle() {
    if (toggle) {
      setToggle(false);
    } else {
      setToggle(true);
    }
  }

  return (
    <nav className="bg-background bg-opacity-95">
      {toggle && (
        <div className="absolute top-[108px] right-0 bottom-0 w-screen h-screen bg-black bg-opacity-60 md:hidden"></div>
      )}
      <div className="container mx-auto">
        <div className="flex justify-between items-center px-[2.1875rem] py-9 md:px-0 md:pl-[3.8125rem]">
          <img src={logo} alt="logo do projeto" />

          <div className="flex justify-between items-center gap-[6.9375rem]">
            {logout.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={classNames(
                  'text-white text-lg hidden md:block after:content-[""] after:bg-orange after:w-0 after:h-[2px] after:block hover:after:w-full hover:text-orange after:transition-all transition-colors duration-200',

                  item.type === "log" &&
                    '!text-orange text-lg hidden md:block after:content-[""] after:bg-orange after:w-0 after:h-[2px] after:block hover:after:w-full hover:text-orange after:transition-all',

                  item.type === "sing" &&
                    "text-white text-lg bg-orange px-[1.875rem] py-2 rounded-lg hidden md:block after:content-none transition-all hover:after:bg-orange hover:after:w-0 hover:after:h-[2px] hover:after:block hover:text-white hover:bg-opacity-80 active:bg-orange",

                  heightScroll >= 600 &&
                    heightScroll < 1600 &&
                    item.name === "O app" &&
                    item.type !== "log" &&
                    '!text-orange text-lg hidden md:block after:content-[""] after:bg-orange after:h-[2px] after:block after:w-full after:transition-all',

                  heightScroll > 1600 &&
                    heightScroll < 2640 &&
                    item.name === "Exercícios personalizados" &&
                    item.type !== "log" &&
                    '!text-orange text-lg hidden md:block after:content-[""] after:bg-orange after:h-[2px] after:block after:w-full after:transition-all',

                  heightScroll >= 2640 &&
                    heightScroll <= 5400 &&
                    item.name === "Os LaboInstrutores" &&
                    item.type !== "log" &&
                    '!text-orange text-lg hidden md:block after:content-[""] after:bg-orange after:h-[2px] after:block after:w-full after:transition-all'
                )}
              >
                {item.name}
              </a>
            ))}
            <div onClick={handleToggle} className="transition-all">
              {toggle ? (
                <img
                  src={close}
                  alt="menu"
                  className="block md:hidden cursor-pointer"
                />
              ) : (
                <img
                  src={menu}
                  alt="close"
                  className="block md:hidden cursor-pointer"
                />
              )}
            </div>
          </div>
        </div>

        <div
          className={
            toggle
              ? "bg-background absolute right-0 flex flex-col gap-10 py-11 px-5 w-72 md:w-0 md:px-0 md:py-0 transition-all"
              : "bg-background absolute right-0 flex flex-col gap-10 py-11 w-0  overflow-x-hidden md:w-0 md:px-0 md:py-0 transition-all"
          }
        >
          {logout.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={handleToggle}
              className={classNames(
                'text-white w-max whitespace-nowrap md:hidden after:content-[""] after:bg-orange after:w-0 after:h-[2px] after:block hover:after:w-full hover:text-orange after:transition-all transition-colors duration-200',

                item.type === "log" &&
                  '!text-orange w-max order-first md:hidden after:content-[""] after:bg-orange after:w-0 after:h-[2px] after:block hover:after:w-full hover:text-orange after:transition-all',

                item.type === "sing" &&
                  "text-white order-first bg-orange px-[1.875rem] py-2 rounded-lg md:block after:content-none transition-all hover:after:bg-orange hover:after:w-0 hover:after:h-[2px] hover:after:block hover:text-white hover:bg-opacity-80 active:bg-orange",

                heightScroll >= 600 &&
                  heightScroll < 1600 &&
                  item.name === "O app" &&
                  item.type !== "log" &&
                  '!text-orange md:block after:content-[""] after:bg-orange after:h-[2px] after:block after:w-full after:transition-all',

                heightScroll > 1600 &&
                  heightScroll < 2640 &&
                  item.name === "Exercícios personalizados" &&
                  item.type !== "log" &&
                  '!text-orange md:block after:content-[""] after:bg-orange after:h-[2px] after:block after:w-full after:transition-all',

                heightScroll >= 2640 &&
                  heightScroll <= 5400 &&
                  item.name === "Os LaboInstrutores" &&
                  item.type !== "log" &&
                  '!text-orange md:block after:content-[""] after:bg-orange after:h-[2px] after:block after:w-full after:transition-all'
              )}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
