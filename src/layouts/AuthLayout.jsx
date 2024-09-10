import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../store/UserSlice";

const AuthLayout = () => {
  const { token } = useSelector((state) => state.auth);
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [token]);

  if (!token) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="pt-20">
      <Outlet client={user} />
    </div>
  );
};

export default AuthLayout;
