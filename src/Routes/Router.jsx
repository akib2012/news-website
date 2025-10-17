import { createBrowserRouter } from "react-router";
import Header from "../Components/Header";
import Homelayout from "../Layout/Homelayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Homelayout></Homelayout>,

        children: [
            
        ]
    }

])


export default router;