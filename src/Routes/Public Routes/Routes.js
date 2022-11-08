import { createBrowserRouter } from "react-router-dom";
import E404 from "../../Components/404/E404";
import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home";
import Services from "../../Pages/Services/All Services/Services";
import ServiceDetails from "../../Pages/Services/Single Services/ServiceDetails";
import Blog from "../../Pages/Blog/Blog";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import PlaceOrder from "../../Pages/PlaceOrder.js/PlaceOrder";


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
                path: "/placeorder/:id",
                element: <PlaceOrder></PlaceOrder>,
                loader: async ({ params }) => {
                    return fetch(`http://localhost:5000/service/${params.id}`);
                }

            },
            {
                path: ""
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
                element: <Register></Register>,
            }


        ]
    },
    {
        path: "/*",
        element: <E404></E404>,
    }
])