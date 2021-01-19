import React from "react";
import { Link, useHistory } from "react-router-dom";

import { useFormFields } from "utils/utils";

const BillingForm = () => {
  const [fields, handleFieldChange] = useFormFields({
    Name: {},
    email: {},
    address: {},
    city: {},
    postalCode: {},
  });
  const history = useHistory();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    history.push("/ship", [fields]);
  };

  return (
    <div id="BillingForm" className={"rectangle"} onSubmit={handleSubmit}>
      <form>
        <label>
          Billing Name:{" "}
          <input type="text" onChange={handleFieldChange} id="Name" required />
        </label>
        <label>
          Email:{" "}
          <input
            type="email"
            onChange={handleFieldChange}
            id="email"
            required
          />
        </label>
        <label>
          Billing Address:{" "}
          <input
            type="text"
            onChange={handleFieldChange}
            id="address"
            required
          />{" "}
        </label>
        <label>
          City:{" "}
          <input type="text" onChange={handleFieldChange} id="city" required />
        </label>
        <label>
          Postal Code:{" "}
          <input
            type="text"
            onChange={handleFieldChange}
            id="postalCode"
            required
          />
        </label>
        <fieldset className="button">
          <button type="submit">BILL</button>
          <Link to="/home">
            <button>CANCEL</button>
          </Link>
        </fieldset>
      </form>
    </div>
  );
};

export default BillingForm;
