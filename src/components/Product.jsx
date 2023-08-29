import { useDispatch, useSelector } from "react-redux";
import {remove,add} from "../redux/Slices/cartSlice"
import { toast } from "react-hot-toast";

const Product = ({item}) => {
  
  const{cart}=useSelector((state)=>state)
  const dispatch=useDispatch()
  function removeFromCart(){
    dispatch(remove(item.id))
    toast.error("item removed from cart")
  }
  function addToCart(){
    dispatch(add(item))
    toast.success("item added to cart")
  }

  return(
    <div className="max-w-[300px] rounded-xl flex flex-col justify-between p-4 mb-4 border-[2px] box-shadow transition-all duration-500">
      <div className="p-2">
        <p className="mb-4 font-bold text-lg">{item.title.substring(0,30)}</p>
        <p className="text-sm">{item.description.substring(0,150)}...</p>
      </div>
      <div className="w-full p-2">
        <img src={item.image} alt="productPic" className="max-w-[160px] max-h-[150px] mx-auto p-1"></img>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-green-700 font-bold text-lg">${item.price}</p>
        {
          cart.some((p)=>p.id===item.id)? 
            <button className="bg-slate-900 text-white text-xs font-semibold py-2 px-3 rounded-full" onClick={removeFromCart}>REMOVE FROM CART</button>:
              <button className="bg-slate-900 text-white text-xs font-semibold py-2 px-3 rounded-full" onClick={addToCart}>ADD TO CART</button>
        }
        
      </div>
    </div>
  )
};

export default Product;
