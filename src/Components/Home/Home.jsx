/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import { BsBook } from 'react-icons/bs';

const Home = () => {
  const [allRegistration, setAllRegistration] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setAllRegistration(data));
  }, []);
  const handleRegistration = (registration) => {
    setAllRegistration([...allRegistration, registration]);
    console.log(allRegistration);
  };
  return (
    <div>
      <h1 className="text-3xl font-bold text-center">Course Registration</h1>
      <div>
        <Card></Card>
        <div className="flex gap-5">
        <div className="grid grid-cols-3 w-3/4">
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
                   <div className="flex gap-2 text-gray-600 font-medium  px-2 my-3">
                     <p>Price: {registration.price}</p>
                     <p className="">Credit:<BsBook></BsBook> {registration.reading_time} hrs</p>
                   </div>
                   <button onClick={()=>handleRegistration()} className="bg-[#2F80ED] text-lg font-medium p-2 rounded-lg w-full text-white">
                     Select
                   </button>
                 </div>
               </div>
               )
            }
            </div>
          <div>
            <h1 className="text-lg font-semibold ">
              Credit Hour Remaining 000 hrs
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
