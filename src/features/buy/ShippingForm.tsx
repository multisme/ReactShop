import React, { useState } from "react";

export function useFormFields(initialState: any) {
  const [fields, setValues] = useState(initialState);

  return [
    fields,
    function (event: any) {
      console.log(fields, event.target.id);
      setValues({
        ...fields,
        [event.target.id]: event.currentTarget.value,
      });
    },
  ];
}

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
        <button type="submit">SHIP</button>
      </form>
    </div>
  );
};

export default ShippingForm;
