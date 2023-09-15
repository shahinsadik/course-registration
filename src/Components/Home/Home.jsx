/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { BsCurrencyDollar, BsBook } from 'react-icons/bs';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
      return toast.warn('Already Selected', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    } 
    else {
      cart.forEach((registration)=>{
        count = count + registration.reading_time
        
      })
      cart.forEach((priceTotal)=>{
        prices = prices+priceTotal.price
      })
      const totalRemaining = 20 - count
      
      if(totalRemaining < 0){
        return toast.warn('Exist Your Credit Hour', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
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
        <div className="flex lg:flex-row flex-col gap-5">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:w-3/4 gap-5 mx-2">
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
                     <p><BsCurrencyDollar className="inline ml-1"></BsCurrencyDollar> Price: {registration.price}</p>
                     <p className=""><BsBook className="inline mr-1"></BsBook>Credit: {registration.reading_time} hrs</p>
                   </div>
                   <button onClick={()=>handleRegistration(registration)} className="bg-[#2F80ED] text-lg font-medium p-2 rounded-lg w-full text-white">
                     Select
                   </button><ToastContainer />
                 </div>
               </div>
               )
              }
              
            </div>
          <div className=" mx-2 lg:w-1/4 mb-3">
            
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
