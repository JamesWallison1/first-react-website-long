import HomePage from "./Pages/HomePage/HomePage.jsx";
import Navbar from "./Components/NavComp/Navbar.jsx"
import { Route, Routes } from "react-router-dom";
import ProfilePage from "./Pages/ProfilePage/ProfilePage.jsx";
import ContactPage from "./Pages/ContactPage/ContactPage.jsx";

function App() {
  return(
    <>
        <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/profile" element={<ProfilePage/>} />
          <Route path="/contact" element={<ContactPage/>} />
        </Routes>
    </>
  );
}

export default App
