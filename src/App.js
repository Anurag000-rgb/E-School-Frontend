import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import UserUpdate from './pages/UserUpdate';
import Profile from './pages/Profile';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useSelector } from "react-redux";



function App() {
 const user = useSelector((state) => state.currentUser) ;
  //const user = false;
  //{user ? <Redirect to="/update" /> : <Login />} //  {user ? <Redirect to="/update" /> : <Register />}

  return (
    <Router>
      <Switch>
        <Route exact path = '/'>
          <Home/>
        </Route>
        <Route path = '/update'>
          <UserUpdate/>
        </Route>
        <Route path = '/profile'>
          <Profile/>
        </Route>
        <Route path="/login"> {user ? <Redirect to="/update" /> : <Login />}</Route>
        <Route path="/register">
        {user ? <Redirect to="/update" /> : <Register />}
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
