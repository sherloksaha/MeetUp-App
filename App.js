import React from "react";
import "./App.css";
import {Route, Switch} from 'react-router-dom'
import AllMeetups from "./Pages/AllMeetups";
import NewMeetups from "./Pages/NewMeetups";
import Favourites from "./Pages/Favourites";

import Layout from "./Components2/Layout/Layout";

const App=()=>{
  return(
    <Layout>
    <Switch>
      <Route exact path='/'><AllMeetups/></Route>
      <Route exact path='/new-meetup'><NewMeetups/></Route>
      <Route exact path='/favourites'><Favourites/></Route>
    </Switch>
    </Layout>
  )
}

export default App;