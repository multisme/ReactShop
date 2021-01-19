import { cartItem } from "features/cart/cartSlice";
import { useState } from "react";

export interface FormField {
  content: string;
  status: boolean;
}

export function useFormFields(initialState: any) {
  const [fields, setValues] = useState(initialState);

  return [
    fields,
    function (event: any) {
      setValues({
        ...fields,
        [event.target.id]: {
          content: event.currentTarget.value,
          status: event.currentTarget.validity.valid,
        },
      });
    },
  ];
}

export function checkValidFields(fields: Record<string, FormField>) {
  for (var name in fields) {
    if (!fields[name].status) {
      return false;
    }
  }
  return true;
}
