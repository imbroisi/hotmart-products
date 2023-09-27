import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import CourseOnline from 'Pages/Products/CourseOnline';
import Signature from 'Pages/Products/Signature';
import EBook from 'Pages/Products/EBook';
import OnlineEvent from 'Pages/Products/OnlineEvent';
import Comunity from 'Pages/Products/Comunity';

const App = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/course-online' element={<CourseOnline />} />
    <Route path='/signature' element={<Signature />} />
    <Route path='/ebook' element={<EBook />} />
    <Route path='/online-event' element={<OnlineEvent />} />
    <Route path='/comunity' element={<Comunity />} />
  </Routes>
)


export default App;
