
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import WebpageTridots from './components/WebpageTridots';
import AdminPage from './components/AdminPage';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<AdminPage/>}></Route>
        {/* <Route path='/' element={<WebpageTridots/>}></Route> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
