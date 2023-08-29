import { useEffect, useState } from "react";
import Product from "../components/Product";
import Spinner from "../components/Spinner";

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products/";
  const[items,setItems]=useState([]);
  const[loading,setLoading]=useState(false)
  async function fetchData(){
    setLoading(true)
    try {
      const output=await fetch(API_URL)
      const data=await output.json();
      setItems(data)
    } catch (error) {
      console.log("error while fetching data ",error)
      setItems([])
    }
    setLoading(false)
  }

  useEffect(()=>{
    fetchData();
  },[])

  return (
    <div className="flex justify-evenly flex-wrap max-w-[1000px] mx-auto p-5">
        {
          loading?<Spinner/>:(
            items.length>0?(
              items.map((item)=>(
                <Product key={item.id} item={item}/>
              ))
            ):(
              <div className="flex justify-center items-center font-bold text-2xl text-slate-900 h-[75vh]">No Post Found</div>
            )
          )
        }
    </div>
  )
};

export default Home;
