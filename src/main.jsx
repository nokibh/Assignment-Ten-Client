import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Components/Root/Root';
import Error from './Components/Error/Error';
import Home from './Components/Home/Home';
import FirebaseProvider from './Components/Firebase/FirebaseProvider';
import AddTourist from './Components/AddTourist/AddTourist';
import MyList from './Components/MyList/MyList';
import Contact from './Components/Contact/Contact';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Country from './Components/Country/Country';
import Details from './Components/Details/Details';
import Update from './Components/Update/Update';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/addspot',
        element: (
          <PrivateRoute>
            {' '}
            <AddTourist></AddTourist>
          </PrivateRoute>
        ),
      },
      {
        path: '/mylist',
        element: (
          <PrivateRoute>
            {' '}
            <MyList></MyList>
          </PrivateRoute>
        ),
      },
      {
        path: '/Card/:id',
        element: (
          <PrivateRoute>
            <Details></Details>
          </PrivateRoute>
        ),
        loader: () => fetch('http://localhost:5000/country'),
      },
      {
        path: '/contact',
        element: <Contact></Contact>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/register',
        element: <Register></Register>,
      },
      {
        path: '/update/:id',
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/mylist${params.id}`),
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FirebaseProvider>
      <RouterProvider router={router} />
    </FirebaseProvider>
  </React.StrictMode>
);
