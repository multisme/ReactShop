import React, { useState } from "react";

import {
        useFormFields,
        FormField
} from "utils/utils"

const ShippingForm = () => {
  const [fields, handleFieldChange] = useFormFields({
    name: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
  });

  const handleClick = (e: any) => {
          e.preventDefault();
          const valid = fields.every((field: FormField) => field.status != false)
          if (valid == true){
                  dispatch()
          }
  }

  return (
    <div id="Ship" className={"rectangle green-border"}>
      <form>
        <label>
          Name: <input type="text" onChange={handleFieldChange} id="name" required />{" "}
        </label>
        <label>
          Email: <input type="email" onChange={handleFieldChange} id="email" required />{" "}
        </label>
        <label>
          Address: <input type="text" onChange={handleFieldChange} id="address" required/>{" "}
        </label>
        <label>
          City: <input type="text" onChange={handleFieldChange} id="city"required/>{" "}
        </label>
        <label>
          Postal Code: <input type="text" onChange={handleFieldChange} id="postalCode"required/>{" "}
        </label>
        <button type="submit" onClick={handleClick}>SHIP</button>
      </form>
    </div>
  );
};

export default ShippingForm;
