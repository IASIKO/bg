import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import RoutesComponent from './RoutesComponent';
import Home from './Components/Pages/Home';
import BoardGamesPage from './Components/Pages/BoardGamesPage';
import GiftCardPage from './Components/Pages/GiftCardPage';
import ContactPage from './Components/Pages/ContactPage';

const App = () => {

  const router = createBrowserRouter([
    {path: '/', element: <Home/> },
    {path: '/boardgames', element: <BoardGamesPage />},
    {path: '/giftcards', element: <GiftCardPage/> },
    {path: '/contact', element: <ContactPage/> },
  ])

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
