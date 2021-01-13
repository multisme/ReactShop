import React, { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";


import {
        useFormFields,
        checkValidFields
 } from "utils/utils"

const BillingForm = () => {
  const [fields, handleFieldChange] = useFormFields({
    Name: {},
    email: {},
    address: {},
    city: {},
    postalCode: {}
  });
  const history = useHistory();
  const location = useLocation();

  console.log("pol", location);
  const handleClick = (e: any) => {
          console.log("clicl");
          e.preventDefault()
          const valid = checkValidFields(fields);
          console.log(fields, valid);
          if (valid == true){
                history.push("/pay", [fields])
          }
  }
        
  return (
    <div id="BillingForm" className={"rectangle green-border"}>
      <form>
        <label>
          Name: <input type="text" onChange={handleFieldChange} id="Name" required/>
        </label>
        <label>
          Email: <input type="email" onChange={handleFieldChange} id="email"  required/>
        </label>
        <label>
          Address: <input type="text" onChange={handleFieldChange} id="address" required/>{" "}
        </label>
        <label>
          City: <input type="text" onChange={handleFieldChange} id="city" required/>
        </label>
        <label>
          Postal Code: <input type="text" onChange={handleFieldChange} id="postalCode" required/>
        </label>
        <button type="submit" onClick={handleClick}>BILL</button>
      </form>
    </div>
  );
};

export default BillingForm;
