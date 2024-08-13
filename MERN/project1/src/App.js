import logo from "./logo.svg";
import "./App.css";
import { Route, BrowserRouter as Router, Routes} from "react-router-dom";
import User from "./User/Pages/User";
import Places from "./Places/Pages/Places";
import Navbar from "./Shared/Navbar";
import UserProfile from "./User/Components/UserProfile";
// import CardMui from "./MUI/Components/CardMui";

function App() {
  return (
    // <CardMui></CardMui>
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/user" exact element={<User />}></Route>
        <Route path="/Places" exact element={<Places />}></Route>
        <Route path="/user/profile" exact element={<UserProfile />}></Route>
      </Routes>

    </Router>
  );
}

export default App;
