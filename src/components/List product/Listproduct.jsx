import React, { useEffect, useState } from "react";
import Productinfo from "./Productinfo";

const Listproduct = () => {
  const [products, setallproducts] = useState([]);
  async function getall() {
    await fetch("http://localhost:4000/allproducts") 
      .then((res) => res.json())
      .then((data) => {
        setallproducts(data);
      });
    console.log(products);
  }
  useEffect(() => {
    getall();
  },[]);
  return (
    <div className="w-[100%] m-4 mt-6">
      <div className="tag-line  w-[90%] hidden lg:flex justify-between self-center">
        <div className="Product w-[20%] text-end ">Product</div>
        <div className=" w-[20%] text-center ">Title</div>
        <div className=" text-center Old_price">Old_price</div>
        <div className=" text-center New_price">New_price</div>
        <div className=" text-center Category">Category</div>
        <div className="remove">Remove</div>
      </div>
      <div className="flex  flex-col gap-9">
        {products.map((product, index) => {
          return (
            <Productinfo
              getall={getall}
              id={product.id}
              title={product.name}
              image={product.image}
              new_price={product.new_price}
              old_price={product.old_price}
              category={product.category}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Listproduct;
