import React from "react";
import {useHistory} from "react-router-dom";

const ThankForm = () => {
        const history = useHistory();

        setTimeout(() => {
                history.push("./")},
                15000
        )
        return (
                <div className="rectangle">
                        <h3>Thank You</h3>
                </div>
        )
};

export default ThankForm;
