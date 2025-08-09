import { createBrowserRouter, Navigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import CategoryAdventure from "../components/CategoryAdventure";

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
                loader: async ({ params }) => {
                    const res = await fetch(`/adventure.json`);
                    const data = await res.json();
                    return data.filter(item => item.categoryId.toString() === params.id)
                }
            },
        ]
    },
    {
        path: "*",
        element: <h1>ERROR</h1>
    }
])

export default router;