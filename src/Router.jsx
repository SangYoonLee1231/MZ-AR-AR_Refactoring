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
      },
      {
        path: "ar-center",
        element: <ArCenterPage />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "event",
        element: <EventPage />,
        errorElement: <ErrorComponent />,
      },
    ],
    errorElement: <ErrorComponent />,
  },
]);

export default router;
