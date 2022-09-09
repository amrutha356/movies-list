import Home from "./Components/Home";
import Navbar from "./Navbar";
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import Addmovie from "./Components/Addmovie";
import Moviedetails from "./Components/Moviedetails";
import Updatemovie from "./Components/Updatemovie";
import Searchpage from "./Components/Searchpage";

function App() {
  return (
    <Router>
    <div className="App">

            <Navbar/>
       
       <Switch>
         <Route exact path="/">
                <Home/>
          </Route>

          <Route path="/add">
             <Addmovie/>
          </Route>

          <Route path="/moviedetails:id">
            <Moviedetails/>
          </Route>

          <Route path="/updatemovie:id">
            <Updatemovie/>
          </Route>

          <Route path="/searchpage:searchVal">
            <Searchpage/>
          </Route>

          <Route path="/wishlist:id">
               <Wishlist/>
          </Route>

      </Switch>

    </div>
    </Router>
  );
}

export default App;
