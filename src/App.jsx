import Home from "./pages/Home";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import SingUp from "./accounts/SingUp";
import TodoList from "./component/todoList/TodoList";
import ForgotPassword from "./accounts/ForgotPassword";
import Contact from "./pages/Contact";
import SignIn from "./accounts/SignIn";
import Layout from "./component/layout/Layout";
import TodoList2 from "./component/todoList/list/TodoList2";

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
    {
      path: "/todo",
      element: <TodoList2/>,
    },
  ]);

  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
}

export default App;
