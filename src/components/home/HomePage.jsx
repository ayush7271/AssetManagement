import React from "react";

export const HomePage = () => {
  return (
    <div className="w-[100%] h-[400px] flex">
      <div className="w-[85%] h-[300px] m-auto">
        <div className="w-[100%] flex text-center">
          <img
            className=""
            src={"https://assets.nobroker.in/merchandise/media/home.png"}
            alt=""
          />
          <p className={`pt-[10px] text-[30px] text-[#c79427] `}>{`Welcome`}</p>
        </div>
        <div className="ml-[68px] -mt-[15px]">
          <p className={`text-[25px] text-[black]`}>{`Company Name `}</p>
          <p className={`text-[15px] text-[black]`}>{`Location`}</p>
          <p className="opacity-40">
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    </div>
  );
};
