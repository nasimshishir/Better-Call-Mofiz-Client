import { createBrowserRouter } from "react-router-dom";
import E404 from "../../Components/404/E404";
import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home";
import Services from "../../Pages/Services/All Services/Services";
import ServiceDetails from "../../Pages/Services/Single Services/ServiceDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/services",
                element: <Services></Services>
            },
            {
                path: "/service/:id",
                element: <ServiceDetails></ServiceDetails>
            }

        ]
    },
    {
        path: "/*",
        element: <E404></E404>,
    }
])