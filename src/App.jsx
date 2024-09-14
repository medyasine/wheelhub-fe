import "./App.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Login from "./user-pannel/pages/auth/login/Login";
import Home from "./user-pannel/pages/home/Home";
import Signup from "./user-pannel/pages/auth/signup/Signup";
import AuthLayout from "./layouts/AuthLayout";
import AdminPannelLayout from "./layouts/AdminPannelLayout";
import Index from "./admin-pannel/pages/Index/Index";
import Users from "./admin-pannel/pages/users/Users";
import NotFound from "./user-pannel/pages/404/NotFound";
import ServerError from "./user-pannel/pages/505/ServerError";
import Profile from "./user-pannel/pages/profile/Profile";
import Vehicles from "./admin-pannel/pages/vehicles/Vehicles";
import UserDetails from "./admin-pannel/pages/users/UserDetails";
import VehicleDetail from "./admin-pannel/pages/vehicles/VehicleDetails/VehicleDetail";
import VehicleCreate from "./admin-pannel/pages/vehicles/VehicleCreate";
import UserCreate from "./admin-pannel/pages/users/UserCreate";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route element={<AuthLayout />}>
          <Route path="profile" element={<Profile />} />
        </Route>
      </Route>

      <Route path="/admin" element={<AdminPannelLayout />}>
        <Route index element={<Index />} />

        <Route path="users" element={<Users />} />
        <Route path="users/create" element={<UserCreate />} />
        {/* <Route path="users/:id/edit" element={<UserEdit />} /> */}
        <Route path="users/:id" element={<UserDetails />} />

        <Route path="profile" element={<Profile />} />

        <Route path="vehicles" element={<Vehicles />} />
        <Route path="vehicles/create" element={<VehicleCreate />} />
        {/* <Route path="vehicles/:id/edit" element={<VehicleEdit />} /> */}
        <Route path="vehicles/:id" element={<VehicleDetail />} />

        {/* <Route path="appointments" element={<Appointments />} />
        <Route path="appointments/create" element={<AppointmentCreate />} />
        <Route path="appointments/:id/edit" element={<AppointmentEdit />} />
        <Route path="appointments/:id" element={<AppointmentDetail />} /> */}

        {/* <Route path="offers" element={<Offers />} />
        <Route path="offers/create" element={<OfferCreate />} />
        <Route path="offers/:id/edit" element={<OfferEdit />} />
        <Route path="offers/:id" element={<OfferDetail />} /> */}

        {/* <Route path="dealerships" element={<Dealerships />} />
        <Route path="dealerships/create" element={<DealershipCreate />} />
        <Route path="dealerships/:id/edit" element={<DealershipEdit />} />
        <Route path="dealerships/:id" element={<DealershipDetail />} /> */}

        {/* <Route path="payments" element={<Payments />} />
        <Route path="payments/create" element={<PaymentCreate />} />
        <Route path="payments/:id/edit" element={<PaymentEdit />} />
        <Route path="payments/:id" element={<PaymentDetail />} /> */}
      </Route>
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />

      <Route path="/500" element={<ServerError />} />
      <Route path="*" element={<NotFound />} />
    </>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
