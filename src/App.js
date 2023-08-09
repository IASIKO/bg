import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Pages/Home";
import BoardGamesPage from "./Components/Pages/BoardGamesPage";
import GiftCardPage from "./Components/Pages/GiftCardPage";
import ContactPage from "./Components/Pages/ContactPage";
import RootLayout from "./Components/Pages/RootLayout";
import Register from "./Components/Pages/Register";
import Login from "./Components/Pages/Login";
import BGDetailPage from "./Components/Pages/BGDetailPage";
import MyAccount from "./Components/Pages/MyAccount";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/:bgId", element: <BGDetailPage /> },
        { path: "/boardgames", element: <BoardGamesPage /> },
        { path: "/giftcards", element: <GiftCardPage /> },
        { path: "/contact", element: <ContactPage /> },
        { path: "/register", element: <Register /> },
        { path: "/login", element: <Login /> },
        { path: "/my-account", element: <MyAccount /> },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;
