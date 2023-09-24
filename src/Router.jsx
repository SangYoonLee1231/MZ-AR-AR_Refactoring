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
        path: "a",
        element: <MainPage />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "b",
        element: <Camera />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "c",
        element: <Camera_User />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "d",
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
        path: "e",
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
        path: "f",
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
        path: "g",
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
        path: "h",
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
        path: "i",
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
        path: "j",
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
        path: "k",
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
        path: "l",
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
        path: "m",
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
        path: "n",
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
