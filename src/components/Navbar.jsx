import { NavLink } from "react-router-dom";
import {FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  const{cart}=useSelector((state)=>state)

  return (
    <div className=" bg-slate-900 py-4 relative">
      <nav className="max-w-[1080px] flex justify-between mx-auto items-center relative">
        <NavLink to="/">
          <img src="./shop-logo-cart.png" alt="logoPic" className=" w-[120px] h-[40px]"></img>
        </NavLink>
        <div className="flex gap-4">
          <NavLink to="/">
            <div className="text-xl text-white">Home</div>
          </NavLink>

          <NavLink to="/cart">
            <FaShoppingCart fill="white" fontSize={25}/>
            {
              cart.length>0?<span className="absolute -top-1 -right-2 bg-green-500 p-1 text-xs font-semibold rounded-full w-5 h-5 flex items-center justify-center">{cart.length}</span>:<></>
            }
            
          </NavLink>

        </div>
      </nav>
    </div>
  )
};

export default Navbar;
