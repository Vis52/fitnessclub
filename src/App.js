
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Layout from './components/applayout/Layout';

import Navbar from './components/Header';
import Home from './components/Home';
import Classes from './components/Classes';
import Welcome from './components/Welcome';
import Book from './components/Book';


const App = () => {
  
    // <div>
    //   <Navbar/>
    //   <Home/>
    //   <About/>
    //   <Classes/>
    //   <Contact/>
    //   <Welcome/>
    //   <Footer/>
    // </div>
  
  
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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};
export default App;