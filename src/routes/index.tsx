//Import of the pages:
import Home from '../pages/Home';
import Error from '../pages/Error';
import UserInfo from '../pages/UserInfo';
import App from '../App';
import { createBrowserRouter } from 'react-router-dom';
//import UserPortfolios from './routes/UserPortfolios';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        { index: true, element: <Home /> },

        { path: '/user', element: <UserInfo /> },
        //      { path: '/user-portfolios', element: <UserPortfolios /> },
        { path: '*', element: <Error /> },
      ],
    },
  ],
  {
    basename: 'github-profile-finder',
  }
);
