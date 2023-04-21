import React from "react";
import { useRouteError } from "react-router-dom";

let ErrorPage = () => {
  const error = useRouteError();

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
};

/* ---------------------------------------------------------------------------------- */

ErrorPage = React.memo(ErrorPage);

export default ErrorPage;
