import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";

import Blog from "../Pages/Blog/Blog";
import Courses from "../Pages/Courses/Courses";
import Faq from "../Pages/FAQ/Faq";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
import Category from "../Pages/Category/Category";

import Checkout from "../Pages/Checkout/Checkout";
import PrivateRoute from "./PrivateRoutes";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },

            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,

            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {

                path: '/course/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`)


            },
            {

                path: '/checkout/:id',
                element: <PrivateRoute> <Checkout></Checkout> </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/checkout/${params.id}`)

            }

        ]
    },
    {
        path: '*',
        element: <ErrorPage></ErrorPage>
    }
])