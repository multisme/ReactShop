import React from "react";
import { Link, useHistory } from "react-router-dom";

import { useFormFields, checkValidFields } from "utils/utils";

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
    history.push("/pay", [fields]);
    e.preventDefault();
  };

  return (
    <div id="ShipForm" className={"rectangle"}>
      <form onSubmit={handleClick}>
        <label>
          Name:{" "}
          <input type="text" onChange={handleFieldChange} id="name" required />{" "}
        </label>
        <label>
          Email:{" "}
          <input
            type="email"
            onChange={handleFieldChange}
            id="email"
            required
          />{" "}
        </label>
        <label>
          Shipping Address:{" "}
          <input
            type="text"
            onChange={handleFieldChange}
            id="address"
            required
          />{" "}
        </label>
        <label>
          City:{" "}
          <input type="text" onChange={handleFieldChange} id="city" required />{" "}
        </label>
        <label>
          Postal Code:{" "}
          <input
            type="text"
            onChange={handleFieldChange}
            id="postalCode"
            required
          />{" "}
        </label>
        <fieldset className="button">
          <button type="submit" onSubmit={handleClick}>
            SHIP
          </button>
          <Link to="/home">
            <button>CANCEL</button>
          </Link>
        </fieldset>
      </form>
    </div>
  );
};

export default ShippingForm;
