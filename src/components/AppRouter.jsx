import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Error from '../pages/Error';
import PostIdPage from '../pages/PostIdPage';
import Posts from '../pages/Posts';
const AppRouter = () => {
  return (
    <Routes>
      <Route path='/about' element={<About />} />
      <Route exact path='/posts' element={<Posts />} />
      <Route path='/' element={<Posts />} />
      <Route exact path='/posts/:id' element={<PostIdPage />} />
      {/* <Route exact path='/' element={<Navigate to='/posts' />} /> */}
      <Route path='*' element={<Error />} />
    </Routes>
  );
};

export default AppRouter;
