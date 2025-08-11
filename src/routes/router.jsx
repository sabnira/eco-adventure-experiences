import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CategoryAdventure from "../components/CategoryAdventure";
import AdventureDetails from "../pages/AdventureDetails";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        children: [
            {
                path: "",
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
        element: <AdventureDetails></AdventureDetails>,
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
            }
        ]
    },
    {
        path: "*",
        element: <h1>ERROR</h1>
    }
])

export default router;