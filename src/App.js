import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Pages/Home";
import BoardGamesPage from "./Components/Pages/BoardGamesPage";
import GiftCardPage from "./Components/Pages/GiftCardPage";
import ContactPage from "./Components/Pages/ContactPage";
import RootLayout from "./Components/Pages/RootLayout";
import Register from "./Components/Pages/Register";
import Login from "./Components/Pages/Login";
import BGDetailPage from "./Components/Pages/BGDetailPage";
import MyAccountLayout from "./Components/Pages/MyAccountLayout";
import Dashboard from "./Components/Pages/My-account/Dashboard";
import Orders from "./Components/Pages/My-account/Orders";
import Addresses from "./Components/Pages/My-account/Addresses";
import AccountDetails from "./Components/Pages/My-account/AccountDetails";
import BGForm from "./Components/Pages/BoardGamesPage/BGForm";
import CategoryProducts from "./Components/Pages/BoardGamesPage/CategoryProducts";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/boardgames", element: <BoardGamesPage /> },
        { path: "/boardgames/new", element: <BGForm /> },
        { path: "/boardgames/edit/:productId", element: <BGForm /> },
        {
          path: "/boardgames/categories/:categoryName",
          element: <CategoryProducts />,
        },
        { path: "/boardgames/categories/:categoryName/:name", element: <BGDetailPage /> },
        { path: "/giftcards", element: <GiftCardPage /> },
        { path: "/contact", element: <ContactPage /> },
        { path: "/register", element: <Register /> },
        { path: "/login", element: <Login /> },
        {
          path: "/my-account",
          element: <MyAccountLayout />,
          children: [
            { path: "/my-account", element: <Dashboard /> },
            { path: "/my-account/orders", element: <Orders /> },
            { path: "/my-account/addresses", element: <Addresses /> },
            {
              path: "/my-account/account-details",
              element: <AccountDetails />,
            },
          ],
        },
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
