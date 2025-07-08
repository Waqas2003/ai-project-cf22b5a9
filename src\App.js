import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Students from './pages/Students';
import AddStudent from './pages/AddStudent';

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('/api/students')
      .then(response => response.json())
      .then(data => setStudents(data));
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/students" component={() => <Students students={students} />} />
        <Route path="/add-student" component={AddStudent} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;