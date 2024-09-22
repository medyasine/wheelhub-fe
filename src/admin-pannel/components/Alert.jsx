import PropTypes from "prop-types";

function Alert({ msg, status, onClose }) {
  let alertIcon;
  switch (status) {
    case "success":
      alertIcon = "check";
      break;
    case "info":
      alertIcon = "info";
      break;
    case "warning":
      alertIcon = "exclamation";
      break;
    case "danger":
      alertIcon = "times";
      break;
    default:
      break;
  }
  return (
    <div
      className={`alert alert-${status} border-0 d-flex align-items-center`}
      role="alert"
    >
      <div className={`bg-${status} me-3 icon-item`}>
        <span className={`fas fa-${alertIcon}-circle text-white fs-6`}></span>
      </div>
      <p className="mb-0 flex-1">{msg}</p>
      <button
        onClick={onClose}
        className="btn-close"
        type="button"
        aria-label="Close"
      ></button>
    </div>
  );
}

Alert.propTypes = {
  msg: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Alert;
