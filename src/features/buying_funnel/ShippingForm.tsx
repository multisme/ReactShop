import React, { useState } from 'react'

export function useFormFields(initialState: any) {
  const [fields, setValues] = useState(initialState);

  return [
    fields,
    function(event: any) {
      setValues({
        ...fields,
        [event.target.id]: event.target.value
      });
    }
  ];
}

export const ShippingForm = () => {
        
        const [fields, handleFieldChange] = useFormFields({
               fistName: "",
               lastName: "",
               email: "",
               address: "",
               city: "",
               postalCode: ""
                });

        return (
        <div id="buy">
        <form>
                <label>First Name: <input type="text" value={fields.fistName} /> </label>
                <label>Last Name: <input type="text" value={fields.lastName} /> </label>
                <label>Email: <input type="email" value={fields.email} /> </label>
                <label>Address: <input type="text" value={fields.address} /> </label>
                <label>City: <input type="text" value={fields.city} /> </label>
                <label>Postal Code: <input type="text" value={fields.postalCode} /> </label>
        </form>
        </div>
       )
}
