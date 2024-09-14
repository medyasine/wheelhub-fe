import { useDispatch } from "react-redux";
import { logout } from "../../store/AuthSlice";

const LogoutButton = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <button
      onClick={handleLogout}
      style={{
        padding: "10px 20px",
        backgroundColor: "#007BFF",
        color: "white",
        border: "none",
        borderRadius: "4px",
        cursor: "pointer",
      }}
    >
      Logout
    </button>
  );
};

export default LogoutButton;
