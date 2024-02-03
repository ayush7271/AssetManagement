import React from "react";

export const Header = () => {
  return (
    <div className="w-[100%] h-[100px] border-b-[0.05px] border-[#c79427] flex justify-between">
      <div className="flex">
        <div className="w-[300px] h-[100px] border-r-[0.05px] border-[#c79427]">
          <div className="flex justify-center mr-[50px]">
            <img
              className="w-[50px] h-[50]"
              src="https://assets.nobroker.in/merchandise/media/home.png"
              alt=""
            />
            <p className="text-[30px] text-center text-[#c79427] font-bold ">
              Asset
            </p>
          </div>
          <p className="text-[30px] text-center -mt-[10px] text-[black] ">
            Asset SoftWare
          </p>
        </div>
        <div className=" pt-6 pl-[50px] text-[30px] opacity-90 ">
          Employee Dashboard
        </div>
      </div>
      <div className="pr-[100px] pt-6 text-[25px]"> Logout</div>
    </div>
  );
};
