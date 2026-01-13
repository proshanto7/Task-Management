import Home from "./pages/Home";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import SingUp from "./accounts/SingUp";
import TodoList from "./component/todoList/TodoList";
import ForgotPassword from "./accounts/ForgotPassword";
import Contact from "./pages/Contact";
import SignIn from "./accounts/SignIn";
import Layout from "./component/layout/Layout";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
    {
      path: "/singup",
      element: <SingUp />,
    },
    {
      path: "/todolist",
      element: <TodoList />,
    },
    {
      path: "/ForgotPassword",
      element: <ForgotPassword />,
    },
    {
      path: "/contact",
      element: <Contact />,
    },
  ]);

  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
}

export default App;
