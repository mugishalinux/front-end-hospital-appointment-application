import Home from "./pages/home/Home";
import Index from "./pages/HomeIndex/Index";
import Doctor from "./pages/Doctor/ListOfDoctors";
import  Landing from "./pages/Landing/Landing";
import  Register from "./pages/Register/Register";
import  Appoint from "./pages/HomeIndex/Appoint";
import Login from "./pages/login/Login";
import NewDoctor from "./pages/New_doctor/NewDoctor";
import List from "./pages/List_Appointment/List";
import ListOfDoctors from "./pages/Doctor/ListOfDoctors";
import Single from "./pages/single/Single";
import New from "./pages/new_department/New";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
          <Route index element={<Index/>} />
            <Route path="home"  element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="appoint" element={<Appoint/>} />
            <Route path="departments">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="doctor">
              <Route index element={<ListOfDoctors/>} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="newDoctor"
                element={<NewDoctor inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
