import React, { useState } from "react";

import { useFormFields } from "utils/utils"

const ShippingForm = () => {
  const [fields, handleFieldChange] = useFormFields({
    Name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const handleSubmit = (e: any) => {
          e.preventDefault()
          console.log(e);
  }
        
  return (
    <div id="ShipForm" className={"rectangle green-border"}>
      <form>
        <label>
          Name: <input type="text" onChange={handleFieldChange} id="Name" required/>
        </label>
        <label>
          Email: <input type="email" onChange={handleFieldChange} />
        </label>
        <label>
          Address: <input type="text" onChange={handleFieldChange} required/>{" "}
        </label>
        <label>
          City: <input type="text" onChange={handleFieldChange} required/>
        </label>
        <label>
          Postal Code: <input type="text" onChange={handleFieldChange} required/>
        </label>
        <button type="submit" onSubmit={handleSubmit}>BILL</button>
      </form>
    </div>
  );
};

export default ShippingForm;
