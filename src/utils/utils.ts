import { useState } from "react"

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

