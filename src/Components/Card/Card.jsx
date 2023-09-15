/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Card = ({ cart, remaining,totalTime,totalPrice }) => {
  return (
    <div>
      <div>
        <h1 className="text-lg text-[#2F80ED] font-bold my-2">Credit Hour Remaining {remaining} hrs</h1>
      </div>
      <div className="space-y-2">
      <hr />
      <h2 className="text-xl font-bold">Course Name</h2>

      {cart.map((reg, index) => (
        <li key={reg.id} className="list-none text-base text-gray-600">
          <span className="mr-1">{index + 1}.</span>
          {reg.title}
        </li>
      ))}
      <hr />
    </div><hr />
    <div>
      <h1 className="text-base font-medium my-2 text-[#494949]">Total Credit Hour : {totalTime} hrs</h1>
      <hr />
    </div>
    <div>
    <h1 className="text-lg font-semibold my-2 text-[#494949]">Total Price : {totalPrice} USD</h1>
    </div>
    </div>
  );
};

export default Card;
