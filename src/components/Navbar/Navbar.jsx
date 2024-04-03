import React from "react";
 import navlogo from "../../ assets/logo.png"; 
 import navprof from "../../ assets/profile.png";
 import arrow from "../../ assets/arrow_icon.svg";
 import { useNavigate } from "react-router-dom";

const Navbar = () => {
  
  return (
    <div>
     <div className="flex justify-between lg:px-12 md:px-10 p-3 pt-5 pb-3 shadow-lg bg-[#f6f6f6]">
     {/* left */}
     <div className="lg:flex-row md:flex-row flex-col flex gap-2">
        <div>
          <img src={navlogo}></img>
        </div>
        <div>
          <div className="lg:text-3xl md:text-2xl text-xl font-extrabold">OpenCart</div>
          <div className="text-red-800">Admin pannel</div>
        </div>
      </div>
      {/* right */}
      <div className="lg:flex-row md:flex-row flex-col flex gap-4 justify-center mr-4">
        <div className="flex justify-center flex-col">
          {/* <img src={navprof} className="w-[50px] h-[50px] rounded-full"></img> */}
        </div>
        <div className="flex justify-center lg:flex-col md:flex-col ">
          {/* <img src={arrow} className="w-[25px] h-[25px] rounded-full"></img> */}
        </div>
      </div>
     </div>
    </div>
  );
};

export default Navbar;
