import { createBrowserRouter } from "react-router-dom";
import E404 from "../../Components/404/E404";
import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home";
import Services from "../../Pages/Services/All Services/Services";
import ServiceDetails from "../../Pages/Services/Single Services/ServiceDetails";
import Blog from "../../Pages/Blog/Blog";
import Login from "../../Pages/Login/Login";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: async () => {
                    return fetch('http://localhost:5000/servicesForHome');
                }
            },
            {
                path: "/services",
                element: <Services></Services>,
                loader: async () => {
                    return fetch('http://localhost:5000/services');
                }
            },
            {
                path: "/service/:id",
                element: <ServiceDetails></ServiceDetails>,
                loader: async ({ params }) => {
                    return fetch(`http://localhost:5000/service/${params.id}`);
                }
            },
            {
                path: "/checkout/:id",
                element: <div></div>,
                loader: async ({ params }) => {
                    return fetch(`http://localhost:5000/service/${params.id}`);
                }

            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: ,
            }


        ]
    },
    {
        path: "/*",
        element: <E404></E404>,
    }
])