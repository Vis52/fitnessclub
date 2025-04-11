
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Layout from './components/applayout/Layout';
import Gym from './components/class/Gym';
import Power from './components/class/Power';
import Free from './components/class/Free';
import Bhangra from './components/class/Bhangra';
import Circuit from './components/class/Circuit';

import Navbar from './components/Header';
import Home from './components/Home';
import Classes from './components/Classes';
import Welcome from './components/Welcome';
import Book from './components/Book';
import Aerobics from './components/class/Aerobics';


const App = () => {
  
  
  
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/Home',
          element: <Home />,
        },
        {
          path: '/about',
          element: <About />,
        },
        {
          path: '/classes',
          element: <Classes/>,
        },
        {
          path: '/contact',
          element: <Contact />,
        },
       {
        path:'/Book',
        element:<Book/>,
       },
       {
        path:'/gym',
        element:<Gym/>,
       },
       {
        path:'/power',
        element:<Power/>
       },
       {
        path:'/aerobics',
        element:<Aerobics/>
       },
       {
        path:'/free',
        element:<Free/>
       },
       {
        path:'/circuit',
        element:<Circuit/>,
       },
       {
        path:'/Bhangra',
        element:<Bhangra/>
       }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
export default App;