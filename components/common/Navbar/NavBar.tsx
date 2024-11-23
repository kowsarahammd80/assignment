"use client";
import React from "react";
import Header from "./Header";

const NavBar = () => {
  return (
    <div>
      <Header />
      <Nav />
    </div>
  );
};

export default NavBar;

const Nav = () => {
  const [focus, setFocus] = useState(false);

  return (
    <nav className="hidden w-full bg-white h-[70px] md:flex items-center">
      <div className="w-[1220px] mx-auto px-3 lg:px-0 flex gap-10 items-center justify-between">
        <Link href="/">
          <img
            alt="shope"
            width="129"
            height="38"
            className="w-[180px]"
            style={{ color: "transparent" }}
            src="https://shope.com.bd/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.2805ed0f.png&w=256&q=75"
          />
        </Link>
        <div className="w-full relative">
          <div className="relative w-full">
            <div className="w-full bg-[#EFF0F5] rounded-[10px] h-[44px] flex gap-3 hover:shadow-lg">
              <input
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                className="w-full bg-transparent px-4 py-3 outline-none"
                type="text"
                placeholder="Search"
                value=""
                readOnly
              />
              <button className="bg-primary rounded-[10px] py-3 px-4 text-lg text-white">
                <svg
                  stroke="currentColor"
                  fill="none"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              </button>
            </div>
            {focus && <SearchItems />}
          </div>
        </div>
        <div className="flex gap-3">
          <div className="relative">
            <Link href="/">
              <button className="bg-[#f5f5f5] text-[#707070] hover:bg-primary hover:text-white rounded-lg p-2">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="32"
                    d="M344 144c-3.92 52.87-44 96-88 96s-84.15-43.12-88-96c-4-55 35-96 88-96s92 42 88 96z"
                  ></path>
                  <path
                    fill="none"
                    strokeMiterlimit="10"
                    strokeWidth="32"
                    d="M256 304c-87 0-175.3 48-191.64 138.6C62.39 453.52 68.57 464 80 464h352c11.44 0 17.62-10.48 15.65-21.4C431.3 352 343 304 256 304z"
                  ></path>
                </svg>
              </button>
            </Link>
          </div>
          <Link className="relative" href="/">
            <button className="bg-[#f5f5f5] text-[#707070] hover:bg-primary hover:text-white rounded-lg p-2">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M352 56h-1c-39.7 0-74.8 21-95 52-20.2-31-55.3-52-95-52h-1c-61.9.6-112 50.9-112 113 0 37 16.2 89.5 47.8 132.7C156 384 256 456 256 456s100-72 160.2-154.3C447.8 258.5 464 206 464 169c0-62.1-50.1-112.4-112-113zm41.6 229.2C351 343.5 286.1 397.3 256 420.8c-30.1-23.5-95-77.4-137.6-135.7C89.1 245.1 76 198 76 169c0-22.6 8.8-43.8 24.6-59.8 15.9-16 37-24.9 59.6-25.1H161.1c14.3 0 28.5 3.7 41.1 10.8 12.2 6.9 22.8 16.7 30.4 28.5 5.2 7.9 14 12.7 23.5 12.7s18.3-4.8 23.5-12.7c7.7-11.8 18.2-21.6 30.4-28.5 12.6-7.1 26.8-10.8 41.1-10.8h.9c22.5.2 43.7 9.1 59.6 25.1 15.9 16 24.6 37.3 24.6 59.8-.2 29-13.3 76.1-42.6 116.2z"></path>
              </svg>
            </button>
            <span className="bg-primary text-[12px] absolute top-[-8px] right-0 w-[17px] h-[17px] font-semibold text-white flex items-center justify-center rounded-full">
              0
            </span>
          </Link>
          <a className="relative" href="/my-cart">
            <button className="bg-[#f5f5f5] text-[#707070] hover:bg-primary hover:text-white rounded-lg p-2">
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 16 16"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
              </svg>
            </button>
            <span className="bg-primary text-[12px] absolute top-[-8px] right-0 w-[17px] h-[17px] font-semibold text-white flex items-center justify-center rounded-full">
              0
            </span>
          </a>
        </div>
        <img
          src="https://shope.com.bd/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcloud.1623b8af.png&w=256&q=75"
          alt="Logo"
          width="183"
          height="53"
          className="cursor-pointer hidden lg:block"
        ></img>
      </div>
    </nav>
  );
};

import { useState } from "react";
import Link from "next/link";

const SearchItems = () => {
  // Sample search items, you can fetch these from localStorage or a state management system
  const [searchHistory, setSearchHistory] = useState([
    "Essence Mascara Lash Princess",
    "Eyeshadow Palette with Mirror",
    "Powder Canister",
    "Red Lipstick",
    "Red Nail Polish",
  ]);

  // Handle the removal of a single item from search history
  const handleDelete = (item: string) => {
    setSearchHistory(searchHistory.filter((searchItem) => searchItem !== item));
  };

  // Handle clearing all search history
  const handleClearAll = () => {
    setSearchHistory([]);
  };

  return (
    <div className="absolute z-[999999] w-full top-full left-0 py-[10px] mt-[12px] bg-white rounded-b-[2px] shadow ">
      <div className="flex items-center justify-between px-[10px]">
        <p className="text-livebg font-medium text-[14px] mb-[10px]">
          Search History
        </p>
        <span
          onClick={handleClearAll}
          className="text-drakNight text-[14px] hover:text-primary duration-100 cursor-pointer font-medium"
        >
          Clear All
        </span>
      </div>
      {searchHistory.length > 0 ? (
        searchHistory.map((item, index) => (
          <div
            key={index}
            className="py-2 px-[10px] flex items-center justify-between gap-y-[8px] cursor-pointer hover:bg-gray-100"
          >
            <p className="text-livebg font-normal text-[14px]">{item}</p>
            <p>
              <img
                alt="delete"
                loading="lazy"
                width="12"
                height="12"
                decoding="async"
                className="delete-item cursor-pointer"
                src="https://shope.com.bd/_next/static/media/close.83cb58c3.svg"
                onClick={() => handleDelete(item)}
                style={{ color: "transparent" }}
              />
            </p>
          </div>
        ))
      ) : (
        <p className="text-livebg font-normal text-[14px] px-[10px]">
          No search history available.
        </p>
      )}
    </div>
  );
};
