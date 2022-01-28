import './App.css';
import HomePage from './pages/homepage/homepage';
import Header from './components/header/header';
import News from './pages/news/news';
import Guidelines from './pages/guidelines/guidelines';
import Reports from './pages/reports/reports';
import About from './pages/about/about';

import {Routes,Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
    <Route path="/" element={<HomePage/>}></Route>
    <Route path="/news" element={<News/>}></Route>
    <Route path="/guidelines" element={<Guidelines/>}></Route>
    <Route path="/reports" element={<Reports/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    </Routes>
    </div>
  );
}

export default App;
