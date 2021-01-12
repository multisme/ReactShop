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

  return (
    <div id="Ship" className={"rectangle border-green"}>
      <form>
        <label>
          Name: <input type="text" onChange={handleFieldChange} id="Name" />{" "}
        </label>
        <label>
          Email: <input type="email" onChange={handleFieldChange} />{" "}
        </label>
        <label>
          Address: <input type="text" onChange={handleFieldChange} />{" "}
        </label>
        <label>
          City: <input type="text" onChange={handleFieldChange} />{" "}
        </label>
        <label>
          Postal Code: <input type="text" onChange={handleFieldChange} />{" "}
        </label>
        <button type="submit">BILL</button>
      </form>
    </div>
  );
};

export default ShippingForm;
