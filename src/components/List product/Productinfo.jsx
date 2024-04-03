import React from 'react'
import trash from "../../ assets/trash-bin.png"
import toast, { Toaster } from 'react-hot-toast';

const Productinfo = (props) => {
  
   async function removeitem(e)
    {
        await fetch('http://localhost:4000/removeproduct',{
              method:'POST',
              headers:{
                  Accept:'application/json',
                  'Content-Type':'application/json'
              },
              body:JSON.stringify({id:props.id,name:props.title}),
            }).then((res)=>res.json()).then((data)=>{
              data.success?toast.success("Product removed"):toast.error("Failed to remove")
            })
            props.getall()
    }
  return (
   
       
      <div className=" gap-2 font-bold flex flex-col ">
        {
                      
             <div className="w-[100%] flex flex-col self-center">
             <hr className="border-2 md:w-[80%] lg:w-[100%] w-[95%] mb-9 mt-5 self-center bg-black dark:bg-black"></hr>
             {/*  */}
             <div className="mb-3 flex lg:flex-row md:flex-row flex-row gap-2 md:w-[80%] lg:w-[80%] w-[95%] self-center items-center">
             {/*  */}
             <div className="flex-row lg:w-[20%] md:w-[30%] w-[40%] gap-3 flex justify-between">
             <div className=" flex justify-center self-center"><img className="w-[100px] self-center" src={props.image}></img></div> </div>                 
             {/*  */}
             <div className="flex flex-col lg:flex-row md:flex-row lg:w-[80%] md:w-[80%] w-[80%] justify-between">
               <p className="lg:w-[35%] md:w-[35%] w-[95%] flex  flex-col justify-center">{props.title}</p>
              {/*  */}
             <div className="flex w-[85%] lg:mt-0 md:mt-0 mt-3 justify-between flex-wrap">
             <div className="w-[25%] line-through flex  flex-col justify-center text-center">${props.old_price}</div>
             <div className="w-[15%] flex  flex-col justify-center ">${props.new_price}</div> 
             <div className="w-[15%] flex  flex-col justify-center ">{props.category}</div> 
             <button onClick={removeitem}><img src={trash} className='w-9 lg:flex md:flex hidden'></img></button>                
             </div>
             <button onClick={removeitem} className='mt-3 bg-red-500 w-[100%] lg:hidden md:hidden rounded-md text-white py-1 active:bg-slate-600 '>Delete item </button>                
              </div>
              </div>
             </div>     
            
        }
      </div>
     
    
  
    
  )
}

export default Productinfo