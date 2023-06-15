import logo from './logo.svg';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import HomepageAdmin from './Components/Admin/HomepageAdmin';
import Homepage from './Components/Homepage';
import HomepageUser from './Components/User/HomepageUser';
import Login from './Components/Admin/Login';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route element={<Homepage/>}>
          <Route path='/'  element={<HomepageUser/>}/>
        </Route>

        <Route path='/login-admin' element={<Login/>}/>
        <Route path='/dashboard-admin/:id' element={<HomepageAdmin/>}/>
      </Routes>
    </div>
  );
}

export default App;