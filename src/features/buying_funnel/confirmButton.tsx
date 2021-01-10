import React from "react";

export const buyButton = () => {
        const handleClick = (e) => {
                console.log("buy");
        }

        return (
                <button onClick={handleClick}>
                        Confirm
                </button>
        )
};
