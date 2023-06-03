import { Route, Routes } from 'react-router-dom/dist';
import { Layout } from './Layout/Layout';
import Home from 'page/Home/Home';
import Movies from 'page/Movies/Movies';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />
      </Route>
    </Routes>
  );
};
