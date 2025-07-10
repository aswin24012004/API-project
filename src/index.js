import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import Home from './pages/Home';
// import About from './pages/About';
// import Contact from './pages/Contact';
// import ErrorNotFound from './pages/ErrorNotFound';
// import NavBar from './pages/NavBar'; // shared layout with NavBar
// import App from './App'
import WeatherApp from './weatherApp/DogApi';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <NavBar />,
//     errorElement: <ErrorNotFound />,
//     children: [
//       { index: true, element: <Home /> },
//       { path: 'about', element: <About /> },
//       { path: 'contact', element: <Contact /> },
//     ],
//   }
// ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <WeatherApp />
    {/* <App /> */}
  </React.StrictMode>
);

