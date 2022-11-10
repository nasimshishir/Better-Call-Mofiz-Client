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
import Orders from "../../Pages/Orders/Orders";
import MyReviews from "../../Pages/My Reviews/MyReviews";
import AddService from "../../Pages/AddService/AddService";
import PrivateRoute from "../Private Routes/PrivateRoute";
import UpdateReview from "../../Pages/Update/UpdateReview";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: async () => {
                    return fetch('https://assignment-11-server-eight.vercel.app/servicesForHome');
                }
            },
            {
                path: "/services",
                element: <Services></Services>,
                loader: async () => {
                    return fetch('https://assignment-11-server-eight.vercel.app/services');
                }
            },
            {
                path: "/service/:id",
                element: <ServiceDetails></ServiceDetails>,
                loader: async ({ params }) => {
                    return fetch(`https://assignment-11-server-eight.vercel.app/service/${params.id}`);
                }
            },
            {
                path: "/placeorder/:id",
                element: <PrivateRoute><PlaceOrder></PlaceOrder></PrivateRoute>,
                loader: async ({ params }) => {
                    return fetch(`https://assignment-11-server-eight.vercel.app/service/${params.id}`);
                }

            },
            {
                path: "/orders",
                element: <PrivateRoute><Orders></Orders></PrivateRoute>
            },
            {
                path: "/myreviews",
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: "/addservice",
                element: <PrivateRoute><AddService></AddService></PrivateRoute>
            },
            {
                path: "/updatereview/:id",
                element: <PrivateRoute><UpdateReview></UpdateReview></PrivateRoute>,
                loader: async ({ params }) => {
                    return fetch(`https://assignment-11-server-eight.vercel.app/reviews/${params.id}`);
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
                element: <Register></Register>,
            }


        ]
    },
    {
        path: "/*",
        element: <E404></E404>,
    }
])