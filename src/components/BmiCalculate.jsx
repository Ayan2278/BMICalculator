import React, { useState } from "react";

const BmiCalculate = () => {
  const [weight, setWeight] = useState(40); // Default value of the range input
  const [height, setHeight] = useState(100);

  const onWeightChange = (event) => {
    const newValue = event.target.value;
    setWeight(newValue); // Update the state with the new value
  };
  const onHeightChange = (event) =>{
    const newHeight = event.target.value;
    setHeight(newHeight);
  }

  return (
    <div
      className="container d-flex justify-content-center align-items-center"
      style={{ width: "100vw", height: "100vh" }}
    >
      <div className="card col-lg-6 col-12 align-items-center">
        <div className="card-header">
          <h2>BMI Calculator</h2>
        </div>
        <div className="card-body">
          <label className="form-check-label">Weight: {weight}</label><br />
          <input 
            type="range" 
            step="1" 
            min="40" 
            max="200" 
            value={weight} // Bind the input value to the state
            style={{width:"200px"}} 
            onChange={onWeightChange} 
          /><br/>
          <label className="form-check-label">Height: {height}</label><br />
          <input 
            type="range" 
            step="1" 
            min="40" 
            max="200" 
            value={height} // Bind the input value to the state
            style={{width:"200px"}} 
            onChange={onHeightChange} 
          /><br/>
          <h3 className="d-flex justify-content-center">{Math.floor((weight/((height/100) * (height/100))) * 100) / 100}</h3>
        </div>
      </div>
    </div>
  );
};

export default BmiCalculate;
