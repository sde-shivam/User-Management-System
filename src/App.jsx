import './App.css'
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import Navbar from "./layout/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddUser from "./users/AddUser";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";

function App() {

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="App">
      <Router>

        <Navbar onSearch={setSearchTerm} />

        <Routes>
          <Route path="/" element={<Home searchTerm={searchTerm} />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/edituser/:id" element={<EditUser />} />
          <Route path="/viewuser/:id" element={<ViewUser />} />
        </Routes>

      </Router>
    </div>
  )
}

export default App
