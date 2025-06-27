import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NotFound from './Notfound';
import ListComponent from './ListComponent';
import Navbar from './Navbar';

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path ='/' element ={<ListComponent />} />
            <Route path ='*' element ={<NotFound />} />
          </Routes>
        </div>      
      </div>
    </Router>
  );
}

export default App
