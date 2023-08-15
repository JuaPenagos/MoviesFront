import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import "./App.css";
import LandingPage from "./LandingPage";
import IndexGender from "./genders/IndexGender";
import Menu from "./utils/Menu";
import routes from "./Route-Config";
import configureValidations from "./Validations";

configureValidations();

function App() {
  return (
    <>
    <BrowserRouter>
    <Menu />
      <div className="container">
        <Routes>
          {routes.map(route => 
          <Route key={route.path} 
          path={route.path} 
          element={<route.component/>} ></Route> )}
        </Routes>
      </div>
    </BrowserRouter>
      
    </>
  );
}

export default App;
