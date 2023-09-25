import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home'
import CourseOnline from './Pages/CourseOnline';
// import ErrorPage from './Pages/ErrorPage';

function App() {
  console.log('_____>>>>>>>> ', window.location.href)
 return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/course-online' element={<CourseOnline />} />
      {/* <Route path='*' element={<Home />} /> */}
    </Routes>
 )
}

export default App;
