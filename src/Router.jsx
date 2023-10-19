import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import MainPage from "./pages/Main/MainPage";
import LoginPage from "./pages/Login/LoginPage";
import LogIn_noMember from "./pages/LogIn_noMember/LogIn_noMember";
import ArCenterPage from "./pages/AR-Center/ArCenterPage";
import EventPage from "./pages/Event/EventPage";
import ErrorComponent from "./ErrorComponent";
import Camera_User from "./pages/Camera_User/Camera_User";
import Camera from "./pages/Camera/Camera";
import SignUp from "./pages/SignUp/SignUp";
import Contest from "./pages/contest/contest";
import ArProductNumber from "./pages/ArProductNumber/ArProductNumber";
import WillYouPost from "./pages/WillYouPost/WillYouPost";
import WriteTitle from "./pages/WriteTitle/WriteTitle";
import Exchange from "./pages/ExchangePage/Exchange";
import KeepPage from "./pages/KeepPage/KeepPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <MainPage />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "main-page",
        element: <MainPage />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "camera",
        element: <Camera />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "camera-user",
        element: <Camera_User />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "ar-center-page",
        element: <ArCenterPage />,
        errorElement: <ErrorComponent />,
        // children: [
        //   {
        //     path: "comppnentName",
        //     element: <ComponentName />,
        //   },
        // ],
      },
      {
        path: "event-page",
        element: <EventPage />,
        errorElement: <ErrorComponent />,
        // children: [
        //   {
        //     path: "comppnentName",
        //     element: <ComponentName />,
        //   },
        // ],
      },
      {
        path: "login-page",
        element: <LoginPage />,
        errorElement: <ErrorComponent />,
        // children: [
        //   {
        //     path: "comppnentName",
        //     element: <ComponentName />,
        //   },
        // ],
      },
      {
        path: "sign-up",
        element: <SignUp />,
        errorElement: <ErrorComponent />,
        // children: [
        //   {
        //     path: "comppnentName",
        //     element: <ComponentName />,
        //   },
        // ],
      },
      {
        path: "login-no-member",
        element: <LogIn_noMember />,
        errorElement: <ErrorComponent />,
        // children: [
        //   {
        //     path: "comppnentName",
        //     element: <ComponentName />,
        //   },
        // ],
      },
      {
        path: "contest",
        element: <Contest />,
        errorElement: <ErrorComponent />,
        // children: [
        //   {
        //     path: "comppnentName",
        //     element: <ComponentName />,
        //   },
        // ],
      },
      {
        path: "ar-product-number",
        element: <ArProductNumber />,
        errorElement: <ErrorComponent />,
        // children: [
        //   {
        //     path: "comppnentName",
        //     element: <ComponentName />,
        //   },
        // ],
      },

      {
        path: "will-you-post",
        element: <WillYouPost />,
        errorElement: <ErrorComponent />,
        // children: [
        //   {
        //     path: "comppnentName",
        //     element: <ComponentName />,
        //   },
        // ],
      },
      {
        path: "write-title",
        element: <WriteTitle />,
        errorElement: <ErrorComponent />,
        // children: [
        //   {
        //     path: "comppnentName",
        //     element: <ComponentName />,
        //   },
        // ],
      },
      {
        path: "exchange",
        element: <Exchange />,
        errorElement: <ErrorComponent />,
        // children: [
        //   {
        //     path: "comppnentName",
        //     element: <ComponentName />,
        //   },
        // ],
      },
      {
        path: "keep-page",
        element: <KeepPage />,
        errorElement: <ErrorComponent />,
        // children: [
        //   {
        //     path: "comppnentName",
        //     element: <ComponentName />,
        //   },
        // ],
      },
    ],
    errorElement: <ErrorComponent />,
  },
]);

export default router;
