import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { logout } from "../redux/actions/authAction";
import { useHistory } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

const Nav = () => {
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();

  const navLinks = [
    { label: "Dashboard", path: "/dashboard/presensiPetugas" },
    { label: "Monitoring", path: "/monitoring" },
    { label: "Daftar Petugas", path: "/daftar_petugas" },
  ];

  const [active, setActive] = useState(false);

  const handleDropdown = () => {
    setActive(!active);
  };

  const pathname = useLocation();

  const isActive = (pn) => {
    if (pn === pathname.pathname) return "border-b-2 border-orange-500";
  };

  const handleLogout = () => {
    dispatch(logout());
    history.push("/");
  };

  return (
    <div className="flex w-full h-24 bg-white shadow-md items-center justify-center">
      <div className="flex flex-row w-full max-w-5xl items-center justify-between ">
        <Link to="/">
          <img
            src="https://dafunda.com/wp-content/uploads/2020/11/Build-Terbaik-Akali-LoL-Wild-Rift.jpg"
            alt=""
            className="w-[70px] h-[70px] rounded-full"
          />
        </Link>
        <div className="flex space-x-4">
          {navLinks.map((link, index) => (
            <div
              className={`hover:scale-105 cursor-pointer ${isActive(
                link.path
              )} transition ease-in-out`}
              key={index}
            >
              <Link to={link.path}>
                <p className="font-semibold">{link.label}</p>
              </Link>
            </div>
          ))}

          <div className="relative inline-block text-left -mt-1">
            <div>
              <button
                type="button"
                className="inline-flex justify-center w-full rounded-full border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
                onClick={handleDropdown}
              >
                Admin
                <svg
                  className="-mr-1 ml-2 h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            {active && (
              <div
                className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex="-1"
              >
                <div className="py-1">
                  <Link
                    to="/profile"
                    className="hover:bg-gray-200 text-gray-700 block px-4 py-2 text-sm"
                  >
                    Profile
                  </Link>

                  <form method="POST" action="#" onSubmit={handleLogout}>
                    <button
                      type="submit"
                      className="text-gray-700 block w-full text-left px-4 py-2 text-sm hover:bg-gray-200"
                    >
                      Sign out
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;