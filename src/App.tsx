import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import homeProductsList from 'data/homeProductsList';
import OtherProducts from 'Pages/Products/OtherProducts';
import MainProducts from 'Pages/Products/MainProducts';

const App = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    {
      homeProductsList.main.map((data) => (
        <Route key={data.path} path={data.path} element={<MainProducts data={data} />} />
      ))
    }
    {
      homeProductsList.others.map((data) => (
        <Route key={data.path} path={data.path} element={<OtherProducts data={data} />} />
      ))
    }
  </Routes>
)


export default App;
