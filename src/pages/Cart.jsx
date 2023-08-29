import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem"
import { NavLink } from "react-router-dom";

const Cart = () => {
  const{cart} = useSelector((state)=>state)
  const[totalItem,setTotalItem]=useState(0)
  const[totalAmount,setTotalAmount]=useState(0)
  useEffect(()=>{
    setTotalItem(cart.length)
    setTotalAmount(cart.reduce((acc,cur)=>acc+cur.price,0))
  },[cart])
  return (
    <div className="flex max-w-[900px] mx-auto gap-10 mt-12">
      {
        cart.length>0?(<>
              <div className="w-full">
            {
              cart.map((item)=>(
                <div>
                  <CartItem key={item.id} item={item}/>
                  <div className="w-full h-[2px] bg-slate-600"></div>
                </div>
                
              ))
            }
          </div>
          <div className="flex flex-col justify-between h-[75vh] min-w-[300px]">
            <div>
              <p className="text-green-600 text-2xl font-bold">YOUR CART</p>
              <p className="text-green-600 text-4xl font-bold">SUMMARY</p>
              <p className=" mt-2">Total Items : <span className="font-bold">{totalItem}</span></p>
            </div>
            <div>
              <p>Total Amount : <span className="font-semibold">${totalAmount.toFixed(2)}</span> </p>
              <button className="w-full bg-green-500 rounded-lg p-2 text-white hover:bg-green-600 mt-2 font-semibold">Checkout Now</button>
            </div>
          </div>
        </>):(<div className="flex flex-col gap-4 w-full h-[75vh] items-center justify-center">
                <p className="font-bold text-2xl text-slate-900 ">Your Cart is Empty</p>
                <NavLink to='/'>
                  <button className="bg-green-500 rounded-xl py-2 px-8 text-white hover:bg-green-600 mt-2 font-semibold">Go to Home</button>
                </NavLink>
        </div>)
      }
    </div>
  )
};

export default Cart;
