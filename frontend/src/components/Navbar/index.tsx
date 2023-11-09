import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

import logo from "../../assets/logo.svg";
import menu from "../../assets/icons/menu.svg";
import close from "../../assets/icons/close.svg";

interface NavLink {
  name: string;
  href: string;
  type?: string;
}

interface NavbarProps {
  heightScroll?: number;
}

function classNames(...classes: (string | boolean)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function Navbar({ heightScroll = 0 }: NavbarProps) {
  const [toggle, setToggle] = useState<boolean>(false);

  const location = useLocation();

  function handleToggle() {
    setToggle(!toggle);
  }

  const logout: NavLink[] = [
    { name: "O app", href: "#comments-app" },
    { name: "Exercícios personalizados", href: "#informations-exercises" },
    { name: "Os LaboInstrutores", href: "#instructors" },
    { name: "Log in", href: "/entrar", type: "log" },
    { name: "Sing up", href: "/cadastro", type: "sing" },
  ];

  const login: NavLink[] = [
    { name: "Home", href: "/dashboard" },
    { name: "Execícios", href: "/exercicios" },
    { name: "Perfil", href: "/perfil" },
  ];

  return (
    <nav className="bg-background bg-opacity-95">
      {toggle && (
        <div className="absolute top-[108px] right-0 bottom-0 w-screen h-screen bg-black bg-opacity-60 md:hidden"></div>
      )}
      <div className="container mx-auto">
        <div className="flex justify-between items-center px-[2.1875rem] py-9 md:px-0 md:pl-[3.8125rem]">
          <img src={logo} alt="logo do projeto" />

          <div className="flex justify-between items-center gap-[6.9375rem]">
            {location.pathname === "/dashboard" ||
            location.pathname === "/exercicios" ||
            location.pathname === "/perfil" ||
            location.pathname === "/iniciar-exercicios"
              ? login.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={classNames(
                      "text-white text-lg hidden md:block after:content-[''] after:bg-orange after:w-0 after:h-[2px] after:block hover:after:w-full hover:text-orange after:transition-all transition-colors duration-200",

                      location.pathname === "/dashboard" &&
                        item.href === "/dashboard" &&
                        '!text-orange text-lg hidden md:block after:content-[""] after:bg-orange after:h-[2px] after:block after:w-full after:transition-all',

                      location.pathname === "/exercicios" &&
                        item.href === "/exercicios" &&
                        '!text-orange text-lg hidden md:block after:content-[""] after:bg-orange after:h-[2px] after:block after:w-full after:transition-all',

                      location.pathname === "/perfil" &&
                        item.href === "/perfil" &&
                        '!text-orange text-lg hidden md:block after:content-[""] after:bg-orange after:h-[2px] after:block after:w-full after:transition-all'
                    )}
                  >
                    {item.name}
                  </Link>
                ))
              : logout.map((item) => (
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
                        heightScroll < 2500 &&
                        item.name === "Exercícios personalizados" &&
                        item.type !== "log" &&
                        '!text-orange text-lg hidden md:block after:content-[""] after:bg-orange after:h-[2px] after:block after:w-full after:transition-all',

                      heightScroll >= 2500 &&
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
          {location.pathname === "/dashboard" ||
          location.pathname === "/exercicios" ||
          location.pathname === "/perfil"
            ? login.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={handleToggle}
                  className={classNames(
                    'text-white w-max whitespace-nowrap md:hidden after:content-[""] after:bg-orange after:w-0 after:h-[2px] after:block hover:after:w-full hover:text-orange after:transition-all transition-colors duration-200'
                  )}
                >
                  {item.name}
                </Link>
              ))
            : logout.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={handleToggle}
                  className={classNames(
                    'text-white w-max whitespace-nowrap md:hidden after:content-[""] after:bg-orange after:w-0 after:h-[2px] after:block hover:after:w-full hover:text-orange after:transition-all transition-colors duration-200',

                    item.type === "log" &&
                      '!text-orange w-max md:hidden after:content-[""] after:bg-orange after:w-0 after:h-[2px] after:block hover:after:w-full hover:text-orange after:transition-all',

                    item.type === "sing" &&
                      "text-white bg-orange px-[1.875rem] py-2 rounded-lg md:block after:content-none transition-all hover:after:bg-orange hover:after:w-0 hover:after:h-[2px] hover:after:block hover:text-white hover:bg-opacity-80 active:bg-orange",

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
