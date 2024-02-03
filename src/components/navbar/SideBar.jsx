import React, { useState } from "react";
import { redirectLink, sidebarName } from "./constant";
import { useNavigate } from "react-router-dom";

export const SideBar = () => {
  const [activeId, setActiveId] = useState(0);
  const navigate = useNavigate();
  const handleClick = (i, j) => {
    setActiveId(j);
    navigate(redirectLink(i?.name));
  };
  return (
    <div>
      <div className="w-[300px] h-screen border-r-[0.05px] border-[#c79427]">
        <div className="pt-[30px]">
          {sidebarName?.map((i, j) => (
            <>
              <div
                className={`group w-[100%] h-[90px] border-b-[0.05px] border-[#c79427] ${
                  activeId === j && "border-b-[2px] shadow-md  "
                } cursor-pointer`}
                onClick={() => handleClick(i, j)}
              >
                <div className="w-[100%] flex text-center">
                  <img className="pt-[10px]" src={i?.img} alt="" />
                  <p
                    className={`pt-[30px] opacity-60 text-[18px] ${
                      activeId === j && "opacity-80"
                    }`}
                  >
                    {i?.name}
                  </p>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};
