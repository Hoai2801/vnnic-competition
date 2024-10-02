import React from "react";
import { NavLink } from "react-router-dom";

interface NavItem {
  to: string;
  children: React.ReactNode;
}

export default function Navbar() {
  const navItems: NavItem[] = [
    { to: "/", children: "Trang chủ" },
    { to: "/tin-tuc", children: "tin tức" },
  ];

  return (
    <>
      <div className="sticky top-0 mb-2 flex w-full gap-2 bg-zinc-800 px-2 text-white">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive, isPending, isTransitioning }) =>
              [
                "p-2 transition-colors hover:bg-stone-600",
                isPending ? "pending" : "",
                isActive ? "bg-stone-600" : "",
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
