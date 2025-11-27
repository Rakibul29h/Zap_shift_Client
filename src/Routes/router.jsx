import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/HomePage/Home/Home";
import Coverage from "../Pages/Coverage/Coverage";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/AuthPage/LogIn/Login";
import Register from "../Pages/AuthPage/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import BeRider from "../Pages/Rider/BeRider";
import SendParcel from "../Pages/sendParcel/SendParcel";
import DashBoard from "../Layouts/DashBoard/DashBoard";
import MyParcels from "../Pages/DashBoard/My-Parcels/MyParcels";
import Payment from "../Pages/Payment/Payment";
import PaymentSuccess from "../Pages/Payment/PaymentSuccess";
import PaymentCancelled from "../Pages/Payment/PaymentCancelled";
import PaymentHistory from "../Pages/DashBoard/History/PaymentHistory";
import RiderRequest from "../Pages/DashBoard/Rider_Request/RiderRequest";

export const router=createBrowserRouter([
    {
        path:"/",
        element:<RootLayout></RootLayout>,
        children:[
            {
                index:true,
                element:<Home></Home>
            },
            {
                path:"/coverage",
                loader:()=>fetch('/warehouses.json').then(res=>res.json()),
                Component: Coverage
            }
            ,{
                path:"/rider",
                 loader:()=>fetch('/warehouses.json'),
                element:<PrivateRoutes>
                    <BeRider></BeRider>
                </PrivateRoutes>
            },
            {
                path:"/sendParcel",
                loader:()=>fetch('/warehouses.json'),
                element:<PrivateRoutes>
                    <SendParcel></SendParcel>
                </PrivateRoutes>
            }
        ]
    },
    {
        path:"/",
        element:<AuthLayout></AuthLayout>,
        children:[
           {
            path:"/login",
            element:<Login></Login>
           },
           {
            path:"/register",
            element:<Register></Register>
           }

        ]
    },
    {
        path:"/dashboard",
        element:<PrivateRoutes>
            <DashBoard></DashBoard>
        </PrivateRoutes>,
        children:[
            {
                path:"my-parcels",
                element:<MyParcels></MyParcels>
            },
            {
                path:"payment/:parcelId",
                element:<Payment></Payment>
            },
            {
                path:"payment-success",
                element:<PaymentSuccess></PaymentSuccess>
            },
            {
                path:"payment-cancelled`",
                element:<PaymentCancelled></PaymentCancelled>
            },
            {
                path:"payment-history",
                Component:PaymentHistory,
            }
            ,{
                path:"rider-request",
                Component:RiderRequest
            }
        ]
    }
])