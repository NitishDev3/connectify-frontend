import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import ErrorPage from "./exception_components/ErrorPage";
import LoginSignup from "./components/LoginSignup";
import Home from "./components/Home";
import { lazy, Suspense } from "react";
import LoadingPage from "./exception_components/LoadingPage";

const Search = lazy(() => import("./components/Search"));
const Reels = lazy(() => import("./components/Reels"));
const Notifications = lazy(() => import("./components/Notifications"));
const Message = lazy(() => import("./components/Message"));
const Profile = lazy(() => import("./components/Profile"));
// const Search = lazy(()=>{import("./components/Search")})

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/search",
          element: (
            <Suspense fallback={<LoadingPage />}>
              <Search />
            </Suspense>
          ),
        },
        {
          path: "/reels",
          element: (
            <Suspense fallback={<LoadingPage />}>
              <Reels />
            </Suspense>
          ),
        },
        {
          path: "/notifications",
          element: (
            <Suspense fallback={<LoadingPage />}>
              <Notifications />
            </Suspense>
          ),
        },
        {
          path: "/message",
          element: (
            <Suspense fallback={<LoadingPage />}>
              <Message />
            </Suspense>
          ),
        },
        {
          path: "/profile",
          element: (
            <Suspense fallback={<LoadingPage />}>
              <Profile />
            </Suspense>
          ),
        },
      ],
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: <LoginSignup />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
