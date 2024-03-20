import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home";
import Registration from "./Components/Registration";
import Login from "./Components/Login";
import Template from "./Components/Template";
import Info from "./Components/Info";
import Certificate from "./Components/Certificate";
import Contact from "./Components/Contact";
import Fav from "./Components/Fav";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Registration" element={<Registration />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Template" element={<Template />}></Route>
        <Route path="/Info" element={<Info />}></Route>
        <Route
          path="/Certificate/:id/:id1/:id2/:id3"
          element={<Certificate />}
        ></Route>
        <Route path="/Contact" element={<Contact />}></Route>
        <Route path="/Fav" element={<Fav />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
