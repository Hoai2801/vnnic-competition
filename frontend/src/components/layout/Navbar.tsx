import React from "react";
import { NavLink } from "react-router-dom";

interface NavItem {
  to: string;
  children: React.ReactNode;
}

export default function Navbar() {
  const navItems: NavItem[] = [
    { to: "/", children: "Trang chủ" },
    { to: "/Gioi-thieu", children: "Giới thiệu" },
  ];

  return (
    <>
      <div className="sticky top-[57px] z-10 mb-2 flex w-full gap-2 bg-[#282A35] px-2 text-sm text-white sm:top-[67px] sm:text-base">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive, isPending, isTransitioning }) =>
              [
                "p-2 transition-colors hover:bg-zinc-950",
                isPending ? "pending" : "",
                isActive ? "bg-sky-700" : "",
                isTransitioning ? "transitioning" : "",
              ].join(" ")
            }
          >
            {item.children}
          </NavLink>
        ))}
      </div>
    </>
  );
}
