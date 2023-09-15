/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Card = ({ cart }) => {
  return (
    <div className="space-y-2">
      <hr />
      <h2 className="text-xl font-bold">Course Name</h2>

      {cart.map((reg, index) => (
        <li className="list-none text-base text-gray-600" key={reg.id}>
          <span className="mr-1">{index + 1}.</span>
          {reg.title}
        </li>
      ))}
      <hr />
    </div>
  );
};

export default Card;
