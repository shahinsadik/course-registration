/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Card from "../Card/Card";


const Home = () => {
  const [allRegistration, setAllRegistration] = useState([]);
  const [cart, setCart]= useState([])
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setAllRegistration(data));
  }, []);

  const handleRegistration = (registration) => {
    const isCourseInCart = cart.some((item) => item.id === registration.id);

    if (isCourseInCart) {
      alert(`Already "${registration.title}" is selected in the cart.`);
    } else {
      setCart([...cart, registration]);
    }
    
  };

  return (
    <div>
      <h1 className="text-3xl my-3 font-bold text-center">Course Registration</h1>
      <div>
        <div className="flex gap-5">
        <div className="grid grid-cols-3 w-3/4 gap-5">
            {
               allRegistration.map(registration=>
               <div className="bg-white shadow-xl  rounded-xl p-3">
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
          <div className="bg-white shadow-xl  rounded-xl p-3 w-1/4">
            
                  <Card
                  cart={cart}
                  ></Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
