import React from "react";

import {useDispatch} from "react-redux";

import {fromShippingtoConfirmed} from "./buySlice";

export const confirmButton = () => {

         const dispatch = useDispatch();

        const handleClick = (_e: any) => {
                dispatch(fromShippingtoConfirmed);
        }

        return (
                <button onClick={handleClick}>
                        Confirm
                </button>
        )
};
