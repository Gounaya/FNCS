import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import UserPanel from "./UserPanel";
import { SearchStation } from "./SearchStation";


export default function App() {
    return (
      <Router>
        <div className="App">
          <nav>
            <ul>
              <li>
                <Link to="/ListStation">List</Link>
              </li>
              <li>
                <Link to="/Userpanel">Userpanel</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div>
            <Route path="/ListStation" component={SearchStation}/>
            <Route path="/Userpanel" component={UserPanel}/>
        </div>
      </Router>
    );
  }

  
