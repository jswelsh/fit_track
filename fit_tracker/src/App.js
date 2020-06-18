import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component";
import ExcerciseList from "./component/exercises-list.component";
import EditExcercise from "./component/edit-excercise.component";
import CreateExcercise from "./component/create-exercise.component";
import CreateUser from "./component/create-user.component";

//import Excercise from '../../backend/models/exercise.model'; //whats this for again?
//import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <br/>
      <Route path="/" exact component={ExcerciseList} />
      <Route path="/edit/:id"component={EditExcercise} />    
      <Route path="/create"component={CreateExcercise} />
      <Route path="/user"component={CreateUser} />
    </Router>
  );
}

export default App;
