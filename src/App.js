import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Pages/Home";
import BoardGamesPage from "./Components/Pages/BoardGamesPage";
import GiftCardPage from "./Components/Pages/GiftCardPage";
import ContactPage from "./Components/Pages/ContactPage";
import RootLayout from "./Components/Pages/RootLayout";
import RegisterForm from "./Components/Pages/RegisterForm";
import Login from "./Components/Pages/Login";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/boardgames", element: <BoardGamesPage /> },
        { path: "/giftcards", element: <GiftCardPage /> },
        { path: "/contact", element: <ContactPage /> },
        { path: "/register", element: <RegisterForm /> },
        { path: "/login", element: <Login /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
};

export default App;
