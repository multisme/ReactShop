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
                        console.log(fields);
                },
        ];
}

export function checkValidFields(fields: any) {
        for (var name in fields){
                if (!fields[name].status){
                        return false;
                } 
        } 
        return true;
}
