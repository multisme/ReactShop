import React from "react";
import {useDispatch} from "react-redux";

import {fromBrownsingToBuying} from "features/buying_funnel/buySlice";

export const buyButton = () => {

        const dispatch = useDispatch();

        const handleClick = (e: any) => {
                dispatch(fromBrownsingToBuying());
        }

        return (
                <button onClick={handleClick}>
                BUY
                </button>
        )
};
