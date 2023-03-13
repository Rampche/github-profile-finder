import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//Import of the pages:
import Home from './routes/Home';
import Error from './routes/Error';
import UserInfo from './routes/UserInfo';
//import UserPortfolios from './routes/UserPortfolios';

const router = createBrowserRouter(
  [
    {
      element: <App />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/user', element: <UserInfo /> },
        //      { path: '/user-portfolios', element: <UserPortfolios /> },
        { path: '/*', element: <Error /> },
        //Adicionar um novo objeto com o base name
      ],
    },
  ],
  {
    basename: 'github-profile-finder',
  }
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<RouterProvider router={router} />);
