import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./pages/layouts/RootLayout";
import Login from "./pages/auth/login/Login";
import Home from "./pages/home/Home";
import Signup from "./pages/auth/signup/Signup";
import AuthLayout from "./pages/layouts/AuthLayout";
import AdminPannelLayout from "./pages/layouts/AdminPannelLayout";
import Index from "./pages/admin-pannel/pages/Index/Index";
import Users from "./pages/admin-pannel/pages/users/Users";
import NotFound from "./pages/404/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route element={<AuthLayout />}></Route>
      </Route>

      <Route path="/admin" element={<AdminPannelLayout />}>
        <Route index element={<Index />} />
        <Route path="users" element={<Users />} />
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />

      <Route path="*" element={<NotFound />} />
      {/* <Route path="/500" element={<ServerError />} />  */}
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
