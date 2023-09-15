/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const Card = ({allRegistration}) => {
  
  return (
    <div>
      <h2 className="text-xl font-bold">Course Name</h2>
      <hr />
        {
          allRegistration.map(reg => (
            <div>
              <li>{reg.title}</li>
            </div>
          ))
        }
    </div>
  );
};

export default Card;
