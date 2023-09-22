import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import MainPage from "./pages/Main/MainPage";
import LoginPage from "./pages/Login/LoginPage";
import ArCenterPage from "./pages/AR-Center/ArCenterPage";
import EventPage from "./pages/Event/EventPage";
import ErrorComponent from "./ErrorComponent";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "main",
        element: <MainPage />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "login",
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
        path: "ar-center",
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
        path: "event",
        element: <EventPage />,
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
