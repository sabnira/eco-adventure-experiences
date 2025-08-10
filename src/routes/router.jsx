import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CategoryAdventure from "../components/CategoryAdventure";
import AdventureDetails from "../pages/AdventureDetails";

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
        path: "*",
        element: <h1>ERROR</h1>
    }
])

export default router;