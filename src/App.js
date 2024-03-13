import './App.scss';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
//pages
import Home from './pages/HomePage/HomePage'
import MealDetail from './pages/MealDetailPage/MealDetailPage'
import Category from './pages/CategoryPage/CategoryPage'
//components
import Header from './components/Header/Header'
function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/meal/:id' element={<MealDetail/>}/>
      <Route path='/meal/category/:name' element={<Category/>}/>
    </Routes>
      </BrowserRouter>
  );
}

export default App;
