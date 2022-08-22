import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
// Store
import store from "./utils/store";
// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
// CSS
import "./styles/reset.css";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
