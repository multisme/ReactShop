import React from "react";
import { useHistory } from "react-router-dom";

const ErrorPaiement = () => {
  const history = useHistory();

  setTimeout(() => {
    history.push("/pay");
  }, 5000);
  return (
    <div className="rectangle">
      <h1>Something went wrong with your paiement</h1>
      <h3>You will be redirected in no time</h3>
    </div>
  );
};

export default ErrorPaiement;
