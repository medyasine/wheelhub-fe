import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is included
import { Toast } from "bootstrap"; // Import Bootstrap JS

const Toast = ({ type = "success", message = "", showToast }) => {
  useEffect(() => {
    if (showToast) {
      const toastElement = document.getElementById("dynamicToast");
      const toast = new Toast(toastElement);
      toast.show();
    }
  }, [showToast]);

  let bgColorClass = "";
  let toastMessage = message;

  switch (type) {
    case "success":
      bgColorClass = "bg-success";
      toastMessage = message || "Success! Your action was completed.";
      break;
    case "error":
      bgColorClass = "bg-danger";
      toastMessage = message || "Error! Something went wrong.";
      break;
    default:
      bgColorClass = "bg-info";
      toastMessage = message || "Information!";
      break;
  }

  return (
    <div
      id="dynamicToast"
      className={`toast align-items-center text-white ${bgColorClass} border-0`}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="d-flex">
        <div className="toast-body">{toastMessage}</div>
        <button
          type="button"
          className="btn-close btn-close-white me-2 m-auto"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
    </div>
  );
};

export default Toast;
