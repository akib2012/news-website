import { createBrowserRouter } from "react-router";
import Header from "../Components/Header";
import Homelayout from "../Layout/Homelayout";
import Homepage from "../Pages/Homepage";
import CaterogiNews from "../Components/CaterogiNews";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Homelayout></Homelayout>,

        children: [
            {
                index: true,
                Component: Homepage,
            },
            {
                path: '/categorisnews/:id',
                Component: CaterogiNews,
            }
            
        ]
    }

])


export default router;