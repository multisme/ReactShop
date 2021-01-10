import React from "react";
import {useDispatch} from "react-redux";
import {fromBuyingToShipping} from "features/buying_funnel/buySlice";

export const buyButton = () => {

        const dispatch = useDispatch()

        const handleClick = (_e: MouseEvent) => {
                dispatch(fromBuyingToShipping());
        }

        return (
                <button onClick={handleClick}>
                SHIP
                </button>
        )
};
