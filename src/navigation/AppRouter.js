import { createBrowserRouter } from "react-router-dom";

// nav config
import { NAV } from "./navigationConfig";

// pages
import HomePage from "../pages/HomePage";
import TranscribePage from "../pages/TranscribePage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import AboutPage from "../pages/AboutPage";
import ProfilePage from "../pages/ProfilePage";

export const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: `/${NAV.SENTIMENT_ANALYSIS}`,
    element: <HomePage />,
    name: "Home",
  },
  {
    path: `/${NAV.LOGIN}`,
    element: <LoginPage />,
  },
  {
    path: `/${NAV.SIGN_UP}`,
    element: <SignUpPage />,
  },
  {
    path: `/${NAV.VOICE_TRANSCRIPTION}`,
    element: <TranscribePage />,
    name: "Transcribe",
  },
  {
    path: `/${NAV.ABOUT}`,
    element: <AboutPage />,
    name: "About",
  },
  {
    path: `/${NAV.PROFILE}`,
    element: <ProfilePage />,
    name: "Profile",
  },
];

export const navbarRoutes = routes.filter((item) => (item.name ? true : false));

const routeElements = routes.map((item) => ({
  path: item.path,
  element: item.element,
}));

export const router = createBrowserRouter(routeElements);
