import React from 'react';
import {
     BrowserRouter as Router,
     Switch,
     Route,
     Link
} from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import PostDetails from './components/PostDetails/PostDetails';
import Dashboard from './components/Dashboard/Dashboard';


const App = () => {
     return (
          <div>
               <Router>
                    <Header></Header>
                    <Switch>
                         <Route exact path="/">
                              <Home/>
                         </Route>
                         <Route exact path="/about">
                              <About/>
                         </Route>
                         <Route exact path="/dashboard">
                              <Dashboard/>
                         </Route>
                         <Route exact path="/post/:id">
                              <PostDetails/>
                         </Route>
                    </Switch>
               </Router>
          </div>
     );
};

export default App;