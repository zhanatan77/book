import { Routes, Route} from 'react-router-dom';
import Header from './Header/Header';
import Categori from './pages/Categori';
import Recent from './pages/Recent';
import Books from './pages/Books';
import About from './pages/About';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Categori/>}/>  
        <Route path='/Recent' element={<Recent/>}/>  
        <Route path='/Books' element={<Books/>}/>  
        <Route path='/About' element={<About/>}/>  
      </Routes>
    </div>
  );
}

export default App;
