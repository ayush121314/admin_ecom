import React from "react";
import cart from "../../ assets/Product_Cart.svg";
import listicon from "../../ assets/Product_list_icon.svg";
import { useNavigate } from "react-router-dom";
const Slidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#f6f6f6] lg:w-fit w-full lg:min-h-[100vh] lg:sticky lg:justify-normal lg:gap-5 gap-3 justify-center py-12 px-4 shadow-lg flex lg:flex-col flex-row flex-wrap">
      <div
        onClick={() => navigate("/addproduct")}
        className="add cursor-pointer flex gap-3 bg-slate-300 rounded-lg w-[240px] p-4 active:bg-slate-600"
      >
        <img src={cart} className="scale-[1.2]"></img>
        <div className="text-lg text-nowrap text-center">Add Product</div>
      </div>
      <div
        onClick={() => navigate("/listproduct")}
        className="add cursor-pointer flex gap-3 bg-slate-300 rounded-lg w-[240px] p-4  active:bg-slate-600"
      >
        <img src={listicon} className="scale-[1.2]"></img>
        <div className="text-lg">Manage Products</div>
      </div>
    </div>
  );
};

export default Slidebar;
