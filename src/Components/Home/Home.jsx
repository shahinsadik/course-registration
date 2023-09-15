/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Card from "../Card/Card";


const Home = () => {
  const [allRegistration, setAllRegistration] = useState([]);
  const [cart, setCart]= useState([])
  const [remaining, setRemaining]= useState([20])
  const [totalTime, setTotalTime]=useState([0])
  const [totalPrice, setTotalPrice]=useState([0])
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setAllRegistration(data));
  }, []);

  const handleRegistration = (registration) => {
    const isExist = cart.find((item) => item.id === registration.id);
    let count = registration.reading_time;
    let prices = registration.price
    if (isExist) {
      return alert(`Already "${registration.title}" is selected in the cart.`);
    } 
    else {
      cart.forEach((registration)=>{
        count = count + registration.reading_time
        
      })
      cart.forEach((priceTotal)=>{
        prices = prices+priceTotal.price
      })
      
      const totalRemaining = 20 - count
      if(totalTime>=20){
        return alert("Credit Hour Remaining Now 0 hrs")
      }
      setTotalPrice(prices);
      setTotalTime(count)
      setRemaining(totalRemaining)
      setCart([...cart, registration]);

    }
    
  };

  return (
    
    <div>
      <h1 className="text-3xl my-5 font-bold text-center">Course Registration</h1>
      <div>
        <div className="flex gap-5">
        <div className="grid grid-cols-1 lg:grid-cols-3 w-3/4 gap-5">
            {
               allRegistration.map(registration=>
               <div key={registration.id} className="bg-white shadow-xl  rounded-xl p-3">
                 <div className="rounded-xl">
                   <img
                     className="w-full"
                     src={registration.img}
                     alt=""
                   />
                 </div>
                 <div>  
                 
                   <h1 className="text-lg font-semibold my-3">
                   {registration.title}
                   </h1>
                   <p className="text-sm text-gray-600 text-justify">
                     {registration.description}
                   </p>
                   <div className="flex justify-between text-gray-600 font-medium  px-2 my-3">
                     <p>Price: {registration.price}</p>
                     <p className="">Credit: {registration.reading_time} hrs</p>
                   </div>
                   <button onClick={()=>handleRegistration(registration)} className="bg-[#2F80ED] text-lg font-medium p-2 rounded-lg w-full text-white">
                     Select
                   </button>
                 </div>
               </div>
               )
              }
            </div>
          <div className=" w-1/4">
            
            <div className="bg-white shadow-xl  rounded-xl p-3">
            <Card
                  cart={cart}
                  remaining={remaining}
                  totalTime={totalTime}
                  totalPrice={totalPrice}
                  ></Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
