import About from '../pages/About';
// import Error from '../pages/Error';
import Login from '../pages/Login';
import PostIdPage from '../pages/PostIdPage';
import Posts from '../pages/Posts';

export const privateRoutes = [
  { path: '/about', element: <About />, exact: false },
  { path: '/posts', element: <Posts />, exact: true },
  { path: '/posts/:id', element: <PostIdPage />, exact: true },
  { path: '*', element: <Posts />, exact: false },
  //   { path: '/', element: <Error />, exact: false },
];

export const publicRoutes = [
  { path: '/login', element: <Login />, exact: true },
  { path: '*', element: <Login />, exact: false },
  //   { path: '/*', element: <Error />, exact: false },
];
