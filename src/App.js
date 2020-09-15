import React from "react";
import "./App.css";
import UserForm from "./components/UserForm";
import Header from './components/Header';


function App() {
  return (
    <div className="App">
      <div className="container">
      <Header/>
        <UserForm />
      </div>
    </div>
  );
}

export default App;
