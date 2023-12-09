import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Root from "../Root/Root";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Redistration";
import Rooms from "../Pages/Rooms/Rooms";
import Bookings from "../Pages/Bookings/Bookings";
import RoomDetails from "../Pages/Rooms/RoomDetails/RoomDetails";
import BookNow from "../Pages/Bookings/BookNow/BookNow";
import PrivateRoute from "../Pages/SharedComponent/PrivateRoute/PrivateRoute";
import UpdateDate from "../Pages/UpdateDate/UpdateDate";
import About from "../Pages/About/About";
import Reviews from "../Pages/Rooms/Review/Reviews";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Registration></Registration>
            },
            {
                path: "/rooms",
                element: <Rooms></Rooms>,
                loader: () => fetch('https://b8a11-server-side-habibur-01.vercel.app/room')
            },
            {
                path: "/room/:id",
                element: <RoomDetails></RoomDetails>,
                loader: ({ params }) => fetch(`https://b8a11-server-side-habibur-01.vercel.app/room/${params.id}`)
            },
            {
               path: "/booknow/:id",
               element: <PrivateRoute><BookNow></BookNow></PrivateRoute>,
               loader: ({ params }) => fetch(`https://b8a11-server-side-habibur-01.vercel.app/room/${params.id}`)
            },
            {
                path: "/bookings",
                element: <PrivateRoute><Bookings></Bookings></PrivateRoute>
            },
            {
                path: "/update/:id",
                element: <PrivateRoute><UpdateDate/></PrivateRoute>,
                loader: ({ params }) => fetch(`https://b8a11-server-side-habibur-01.vercel.app/booking/${params.id}`)
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/reviews/:id",
                element: <PrivateRoute><Reviews></Reviews></PrivateRoute>,
                loader: ({ params }) => fetch(`https://b8a11-server-side-habibur-01.vercel.app/booking/${params.id}`)
            }
        ]
    },
]);

export default router;
