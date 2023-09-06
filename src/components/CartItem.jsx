import {MdDeleteForever} from "react-icons/md";
import { useDispatch} from "react-redux";
import {remove} from "../redux/Slices/cartSlice"
const CartItem = ({item}) => {
  const dispatch=useDispatch()
  function removeFromCart(){
    dispatch(remove(item.id))
  }
  return (
    <div className="flex flex-col md:flex-row w-full gap-5 items-center mb-5 mt-5">
      <div className="w-[400px] flex justify-center">
        <img src={item.image} className="object-fill h-[200px]" alt="addedProduct"/>
      </div>
      <div className="max-w-[250px] md:max-w-[400px] mr-4">
        <p className="font-bold mb-2">{item.title}</p>
        <p className="mb-4">{item.description}</p>
        <div className="flex justify-between items-center">
          <p className="font-semibold text-lg text-green-600">${item.price}</p>
          <button className="w-[40px] h-[40px] bg-red-200 flex items-center justify-center rounded-full" onClick={removeFromCart}>
              <MdDeleteForever fontSize={20}/>
          </button>
        </div>
      </div>
    </div>
  )
};

export default CartItem;
