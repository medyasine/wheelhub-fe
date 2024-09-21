import React from "react";

function Alert({ msg, status }) {
  return (
    <div className={`alert alert-${status}`} role="alert">
      {msg}
    </div>
  );
}

export default Alert;
