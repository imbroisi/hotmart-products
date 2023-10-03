import { Routes as ReactRoutes, Route } from 'react-router-dom';
import Home from '../Pages/Home'
import homeProductsList from 'data/productsList';
import OtherProducts from 'Pages/Products/OtherProducts';
import MainProducts from 'Pages/Products/MainProducts';

const Routes = () => (
  <ReactRoutes>
    <Route path='/' element={<Home />} />
    {
      homeProductsList.main.map((data) => (
        data.paths.map((path) => (
          <Route key={path} path={path} element={<MainProducts data={data} />} />        
        )
      )))
    }
    {
      homeProductsList.others.map((data) => (
        data.paths.map((path) => (
          <Route key={path} path={path} element={<OtherProducts data={data} />} />
        )
      )))
    }
  </ReactRoutes>
)


export default Routes;
