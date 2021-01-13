import { useState } from "react"

export interface FormField{
        name: string;
        status: boolean;
}

export function useFormFields(initialState: any) {
        const [fields, setValues] = useState(initialState);

        return [
                fields,
                function (event: any) {
                        console.log(fields, event.target, event.currentTarget.validity.valid);
                        setValues({
                                ...fields,
                                [event.target.id]: { 
                                        content: event.currentTarget.value,
                                        status: event.currentTarget.validity.valid}
                        });
                },
        ];
}

export function checkValidFields(fields: any) {
        let valid: boolean;
        for (var name in fields){
                if (fields[name].status == false){
                        return false;
                } 
        } 
        return true;
}
