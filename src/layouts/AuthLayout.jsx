import { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../store/UserSlice";
import { retry } from "@reduxjs/toolkit/query";

const AuthLayout = () => {
  const { token, user } = useSelector((state) => ({
    token: state.auth.token,
    user: state.user.user,
  }));

  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getUser());
  }, [token, dispatch]);

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }
  }, [token]);

  return (
    <div className="pt-20">
      <Outlet client={user} />
    </div>
  );
};

export default AuthLayout;
