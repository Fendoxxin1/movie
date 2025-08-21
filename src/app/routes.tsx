import { lazy, memo } from 'react';
import { useRoutes } from 'react-router-dom';
import Antd from '../pages/antd';
const MainLayout = lazy(()=> import("../layout/MainLayout"))
const Home = lazy(()=> import("../pages/home"))
const Movie = lazy(()=> import("../pages/movie"))
const MovieDetail = lazy(()=> import("../pages/movie-detail"))

const AppRouters = () => {
  return useRoutes([
    {path: "/", element: <MainLayout/>, children: [
      {index: true, element:<Home/>},
      {path:"movie", element:<Movie/>},
      {path:"antd", element:<Antd/>},
      {path:"movie/:id", element:<MovieDetail/>},
    ]}
  ])
};

export default memo(AppRouters);