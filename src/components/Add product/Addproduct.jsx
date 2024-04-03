import React, { useState } from "react";
import upload from "../../ assets/upload_area.svg"
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('Here is your toast.');

const App = () => {
  return (
    <div>
      <button onClick={notify}>Make me a toast</button>
      <Toaster />
    </div>
  );
};
const Addproduct = () => {
    const [image,setimage]=useState(false);
    const [productdet,setproductdet]=useState({
        name:"",
        image:"",
        category:"women",
        new_price:"",
        old_price:""
    })
    function valuechange(e)
    {
        setproductdet({...productdet,[e.target.name]:e.target.value})
    }
    function imageupload(e)
    {
        setimage(e.target.files[0])
    }
    async function adddata()
    {
       // console.log(productdet)
       let responsedata;
       let productdata=productdet;
       let formdata=new FormData();
       formdata.append('product',image)
       await fetch('http://localhost:4000/upload',{
        method:'POST',
        headers:{
            Accept:'application/json'
        },
        body:formdata,
       }).then((resp)=>resp.json()).then((data)=>{responsedata=data})
       if(responsedata.success)
       {
            productdata.image=responsedata.image_url
            console.log(productdata)
            await fetch('http://localhost:4000/addproduct',{
              method:'POST',
              headers:{
                  Accept:'application/json',
                  'Content-Type':'application/json'
              },
              body:JSON.stringify(productdata),
            }).then((res)=>res.json()).then((data)=>{
              data.success?toast.success("Product added"):toast.error("Product failed")
            })
       }
       else
       {
          toast.error("Fill all details")
       }
    }
    
  return (
   
    <div className="m-5 w-[100%] flex flex-col gap-8">
      <div className="flex flex-col gap-2 w-[100%]">
        <label for ="title"  className="text-lg text-slate-500">Product title</label>
        <input onChange={valuechange} required value={productdet.name} type="text" name="name" id="title" placeholder="Type here" className="border-[2px] p-2 lg:w-[70%] md:w-[70%] w-[90%] rounded-lg text-slate-800 "/>
      </div>
      <div className="flex lg:w-[70%] md:w-[70%] w-[90%] gap-5">
      <div className="flex flex-col gap-2 w-[50%]">
        <label for ="old"  className="text-lg text-slate-500">Old Price</label>
        <input onChange={valuechange} required  value={productdet.old_price} type="Number"  name="old_price" id="old" placeholder="Type here" className="border-[2px]  p-2 w-[100%] rounded-lg text-slate-800"/>
      </div>
      <div className="flex flex-col gap-2 w-[50%]">
        <label for ="new"  className="text-lg text-slate-500">Offered Price</label>
        <input onChange={valuechange} required value={productdet.new_price} type="Number" id="new"  name="new_price" placeholder="Type here" className="border-[2px] p-2 w-[100%] rounded-lg text-slate-800"/>
      </div>
      </div>
      <div className="product-category flex flex-col gap-2 ">
        <label for="categ" className="text-slate-500">Product Content
        ategory</label>
            <select onChange={valuechange}  value={productdet.category} id="categ" name="category" className="border-2 flex p-2 w-[120px] cursor-pointer text-md text-slate-800">
                <option className="" value="women">Women</option>
                <option className="" value="men">Men</option>
                <option className="" value="kid">Kid</option>
            </select>
      </div>
      <div className="upload-area w-fit">
      <label for ="file-upl">
      <p className="mb-2 text-slate-500">Upload Image</p>
        <img src={image?URL.createObjectURL(image):upload} className="cursor-pointer w-[150px] h-[] "></img></label>
        <input required onChange={imageupload} type="file" id="file-upl" name="image" className="hidden"></input>
      </div>
      <div>
      <button onClick={adddata}className="p-3 bg-blue-600 active:bg-blue-800 text-white px-10 text-lg rounded-lg">Add</button></div>
    </div>
  );
};

export default Addproduct;
