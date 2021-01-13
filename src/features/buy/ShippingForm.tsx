import React, { Dispatch, SetStateAction, useState } from "react";
import {useDispatch} from "react-redux";
import {
        Link,
        useHistory
} from "react-router-dom";

import {
        useFormFields,
        checkValidFields
} from "utils/utils"

const ShippingForm = () => {
  const [fields, handleFieldChange] = useFormFields({
    name: {},
    email: {},
    address: {},
    city: {},
    postalCode: {},
  });

  const history = useHistory();
        
  const handleClick = (e: any) => {
          e.preventDefault();
          const valid = checkValidFields(fields);
          if (valid == true){
                history.push("/bill", [fields])
          }
  }

  return (
    <div id="ShipForm" className={"rectangle green-border"}>
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
        <Link to="/home">
                <button>CANCEL</button>
        </Link>
      </form>
    </div>
  );
};

export default ShippingForm;
