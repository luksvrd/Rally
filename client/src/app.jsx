import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/layout";
import { About, Groups, Habit, Login, User } from "./pages";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Login /> },
      { path: "/about", element: <About /> },
      { path: "/habit", element: <Habit /> },
      { path: "/user", element: <User /> },
      { path: "/groups", element: <Groups /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
