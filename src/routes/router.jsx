import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CategoryAdventure from "../components/CategoryAdventure";
import AdventureDetails from "../pages/AdventureDetails";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import Profile from "../pages/Profile";
import ProfileUpdate from "../pages/ProfileUpdate";
import ForgetPassword from "../pages/ForgetPassword";
import Error from "../components/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "/",
                element: <Navigate to={"category/1"}></Navigate>
            },
            {
                path: "/category/:id",
                element: <CategoryAdventure></CategoryAdventure>,
                loader: () => fetch('../adventure.json'),
            },
        ]
    },
    {
        path: "/adventure/:id",
        element: <PrivateRoute><AdventureDetails></AdventureDetails></PrivateRoute>,
        loader: () => fetch('../adventure.json'),
    },
    {
        path: "auth",
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: "/auth/login",
                element: <Login></Login>,
            },
            {
                path: "/auth/register",
                element: <Register></Register>
            },
            {
                path: "/auth/forgetPassword",
                element: <ForgetPassword></ForgetPassword>
            },
            {
                path: "/auth/profile",
                element: <PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path: "/auth/profileUpdate",
                element: <PrivateRoute><ProfileUpdate></ProfileUpdate></PrivateRoute>
            }
        ]
    },
    {
        path: "*",
        element: <Error></Error>
    }
])

export default router;