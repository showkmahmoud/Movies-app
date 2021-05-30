import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Components/Header/Header';
import BottomNav from './Components/BottomNav/BottomNav';
// pages
import Trending from './Pages/Trending/Trending'
import Movies from './Pages/Movies/Movies'
import Series from './Pages/Series/Series'
import Search from './Pages/Search/Search'


function App() {
  return (
    <Router>
    <Header/>
    <div className="App">
      <div className="container pb-5 ">
      <Switch>
          <Route exact path="/" component={Trending} />
          <Route path="/movies" component={Movies} />
          <Route path="/series" component={Series} />
          <Route path="/search" component={Search} />
        </Switch>
      </div>
    </div>
    <BottomNav/>
    </Router>
  );
}

export default App;
