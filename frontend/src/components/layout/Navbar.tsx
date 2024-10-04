import React, { useRef } from "react";
import { NavLink } from "react-router-dom";

interface NavItem {
  to: string;
  children: React.ReactNode;
}

export default function Navbar() {
  const navItems: NavItem[] = [
    { to: "/", children: "Trang chủ" },
    { to: "/Gioi-thieu", children: "Giới thiệu" },
    { to: "/services", children: "Services" },
    { to: "/contact", children: "Contact" },
    { to: "/about", children: "About" },
    { to: "/blog", children: "Blog" },
    { to: "/portfolio", children: "Portfolio" },
    { to: "/faq", children: "FAQ" },
    { to: "/support", children: "Support" },
  ];

  const navRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (navRef.current) {
      navRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (navRef.current) {
      navRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  return (
    <div className="relative">
      <button
        className="transition-color absolute left-0 top-1/2 z-30 -translate-y-1/2 transform bg-gray-700 p-1.5 text-white hover:bg-zinc-950 sm:p-2"
        onClick={scrollLeft}
      >
        &lt;
      </button>
      <div
        ref={navRef}
        className="sticky top-[57px] z-10 mb-2 flex w-full gap-2 overflow-x-auto bg-[#282A35] px-8 text-sm text-white sm:top-[67px] sm:text-base"
      >
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive, isPending, isTransitioning }) =>
              [
                "text-nowrap p-2 transition-colors hover:bg-zinc-950",
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
      <button
        className="transition-color absolute right-0 top-1/2 z-30 -translate-y-1/2 transform bg-gray-700 p-1.5 text-white hover:bg-zinc-950 sm:p-2"
        onClick={scrollRight}
      >
        &gt;
      </button>
    </div>
  );
}
