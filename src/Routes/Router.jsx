import { createBrowserRouter } from "react-router";
import Header from "../Components/Header";
import Homelayout from "../Layout/Homelayout";
import Homepage from "../Pages/Homepage";
import CaterogiNews from "../Components/CaterogiNews";
import Authintectionlayout from "../Layout/Authintectionlayout";
import Login from "../Pages/Login";
import Regester from "../Pages/Regester";
import Newsdetils from "../Pages/Newsdetils";

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
    },
    {
        path: "/auth",
        element: <Authintectionlayout></Authintectionlayout>,
        children: [
            {
               path: '/auth/login',
               Component: Login,
            },
            {
                path:'/auth/regester',
                Component: Regester,
            },
            
            
        ]
    },
    {
        path: '/newsdetils/:id',
        Component: Newsdetils,
        loader: () => fetch('/news.json'),

    }

])


export default router;