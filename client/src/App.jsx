import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import HomePage from "./routes/homePage/homePage";
import ListPage from "./routes/listPage/listPage";
import Layout from "./routes/layout/layout";
import SinglePage from "./routes/singlePage/singlePage";
import ProfilePage from "./routes/profilePage/profilePage";
import Login from "./routes/login/login";
import Register from "./routes/register/register";
import ProfileUpdatePage from "./routes/profileUpdatePage/profileUpdatePage";
import RequireAuth from "./routes/layout/RequireAuth";
import NewPostPage from "./routes/newPostPage/newPostPage";
import { singlePageLoader } from "./lib/loaders";
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <HomePage />
        },
        {
          path: "/list",
          element: <ListPage />
        },
        {
          path: "/:id",
          element: <SinglePage />,
          loader:singlePageLoader
        },
        {
          path: "/profile",
          element: <ProfilePage />
        },
      ],
    },
    {
      path: "/register",
      element: <Register />
    },
    {
      path: "/login",
      element: <Login />
    }
    ,
    {
      path: "/",
      element: <RequireAuth />,
      children: [
        {
          path: "/profile",
          element:<ProfilePage/>
        },
        {
          path: "/profile/update",
          element: <ProfileUpdatePage />
        },
        {
          path: "/add",
          element: <NewPostPage />
        }
      ]
    }
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
