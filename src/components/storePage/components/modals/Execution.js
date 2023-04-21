import React from "react";
import SimpleModal from "../universalComponents/modal/SimpleModal";

const Execution = ({ message = "" }) => {
  return (
    <SimpleModal customStyle="admin-success-execution__modal">
      {message}
    </SimpleModal>
  );
};

export default Execution;
