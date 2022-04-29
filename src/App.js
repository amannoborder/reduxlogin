import React from "react";
import Login from "./components/Login";
import { useSelector } from "react-redux";
import Logout from "./components/Logout";
import { BrowserRouter,Routes,Route } from "react-router-dom";


const App = () => {  
  const users = useSelector(state =>state.users);

  return(
  <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" component={Login}/>
      <Route path="/Logout" component={Logout}/>
    </Routes>
    </BrowserRouter>
  </div>
  );

};
export default App;