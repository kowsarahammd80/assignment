"use client";
import React, { useState } from "react";

const Header = () => {
  const [language, setLanguage] = useState("English");
  const languageList = ["English", "Arabic", "Bengali", "Hindi"];
  return (
    <div className="hidden lg:block bg-[#f0f1f1]">
      <div className="w-[1220px] mx-auto items-center text-[12px] text-lightDark flex justify-between">
        <ul className="flex gap-8 items-center">
          <div className="group relative py-2">
            <button className="flex items-center gap-2 text-primary">
              <span className="min-w-[2.6rem]">{language}</span>
              <span className="group-hover:rotate-[0] rotate-180 duration-300">
                <svg
                  width="10"
                  height="5"
                  viewBox="0 0 8 4"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.314144 2.98006C0.119755 3.17619 0.121167 3.49277 0.317299 3.68716C0.51343 3.88155 0.830009 3.88013 1.0244 3.684L2.18927 2.50869C2.66203 2.03169 2.98739 1.70449 3.26307 1.48309C3.53087 1.26803 3.70288 1.19425 3.85694 1.17461C3.95367 1.16228 4.05154 1.16228 4.14827 1.17461C4.30233 1.19425 4.47434 1.26803 4.74213 1.48309C5.01782 1.70449 5.34318 2.03169 5.81594 2.50869L6.98081 3.684C7.1752 3.88013 7.49178 3.88155 7.68791 3.68716C7.88404 3.49277 7.88545 3.17619 7.69106 2.98006L6.50521 1.78357C6.05858 1.33292 5.69355 0.964605 5.3683 0.703401C5.03008 0.431782 4.68679 0.23516 4.27471 0.182636C4.09403 0.159606 3.91118 0.159606 3.7305 0.182636C3.31842 0.23516 2.97513 0.431782 2.63691 0.703401C2.31166 0.964606 1.94663 1.33292 1.5 1.78357L0.314144 2.98006Z"
                    fill="#F97316"
                  ></path>
                </svg>
              </span>
            </button>
            <ul
              id="language"
              className="w-fit absolute z-[-9999999999] group-hover:z-[999999999999] min-w-[76px] h-0 group-hover:h-fit overflow-hidden rounded-[2px] shadow-lg border border-[#dfdfdf8a] group-hover:opacity-100 opacity-0 bg-white  group-hover:top-[31px] top-[40px] duration-300"
            >
              {languageList?.map((item, index) => (
                <li
                  key={index}
                  onClick={() => setLanguage(item)}
                  className="cursor-pointer py-[8px] flex gap-x-1 hover:bg-secondary  items-center px-[6px] w-full border-t border-[#dfdfdf8a]"
                >
                  <span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_114_11491)">
                        <path
                          d="M7 13.125C3.6225 13.125 0.875 10.3775 0.875 7C0.875 3.6225 3.6225 0.875 7 0.875C10.3775 0.875 13.125 3.6225 13.125 7C13.125 10.3775 10.3775 13.125 7 13.125ZM7 1.75C4.10375 1.75 1.75 4.10375 1.75 7C1.75 9.89625 4.10375 12.25 7 12.25C9.89625 12.25 12.25 9.89625 12.25 7C12.25 4.10375 9.89625 1.75 7 1.75Z"
                          fill="#F97316"
                        ></path>
                        <path
                          d="M7 10.5C8.933 10.5 10.5 8.933 10.5 7C10.5 5.067 8.933 3.5 7 3.5C5.067 3.5 3.5 5.067 3.5 7C3.5 8.933 5.067 10.5 7 10.5Z"
                          fill={language === item ? "#F97316" : undefined}
                        ></path>
                      </g>
                      <defs>
                        <clipPath id="clip0_114_11491">
                          <rect width="14" height="14" fill="white"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <a className="hover:text-primary duration-100" href="">
            Help Center
          </a>
          <a className="hover:text-primary duration-100" href="">
            Helpline: 0964781656
          </a>
        </ul>
        <div className="flex gap-5">
          <a className="hover:text-primary duration-100" href="">
            Become a Seller
          </a>
          <a className="hover:text-primary duration-100" href="">
            Order Track
          </a>
          <div>
            <a className="text-primary" href="/register">
              Sign up
            </a>
            <span className="text-primary">/</span>
            <a className="text-primary" href="/login">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
