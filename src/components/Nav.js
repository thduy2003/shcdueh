import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const ListLink = [
  {
    id: 1,
    to: "/",
    title: "Home",
  },
  {
    id: 2,
    to: "/profile",
    title: "Profile",
  },
  {
    id: 3,
    to: "/blog",
    title: "Blog",
  },
  {
    id: 4,
    to: "/contact",
    title: "Contact Us",
  },
];

const Nav = () => {
  return (
    <>
      <div className="flex items-center justify-center p-5 bg-white shadow-md gap-x-5">
        {ListLink.map((item) => (
          <NavLink
            to={item.to}
            className={({ isActive }) => (isActive ? "text-green-400" : "")}
            key={item.id}
          >
            {item.title}
          </NavLink>
        ))}
      </div>
      <Outlet></Outlet>
    </>
  );
};

export default Nav;
