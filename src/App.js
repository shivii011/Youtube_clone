import './App.css';
import Header from './Header';
import RecommendedVideos from './RecommendedVideos';
import Sidebar from './Sidebar';
import SearchPage from './SearchPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
    return (<div className="app">
        <Router>
          <Header/>
            <Routes>
              <Route path='/search/:searchTerm' element={<div className='searhPage__div'>
                <Sidebar/>
< SearchPage />

              </div>}></Route>
                <Route path='/'
                    element={
                        <div
                    className='app__page'>
                      <Sidebar/>
                      <RecommendedVideos/>
                      </div>
                }></Route>


            </Routes>

        </Router>

    </div>);
}

export default App;
