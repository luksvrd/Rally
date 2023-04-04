import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/layout";
import { About, Groups, Leaderboard, Login, User } from "./pages";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <About /> },
      { path: "/about", element: <About /> },
      { path: "/user", element: <User /> },
      { path: "/groups", element: <Groups /> },
      { path: "/login", element: <Login /> },
      { path: "/leaderboard/:groupId", element: <Leaderboard /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
