import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
// PAGE COMPONENTS
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
// DATA et ACTIONS
import { selectToken } from "../utils/selectors";
import { fetchOrUpdateToken, resetLogin } from "../features/getToken";
// CSS
import "../styles/Login.css";

/**Render the login page
 * @return {JSX}
 */
const Login = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const identifiers = { email: userEmail, password: userPassword };
  const dataToken = useSelector(selectToken);

  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchOrUpdateToken(identifiers));
  };

  useEffect(() => {
    if (dataToken.data?.status === 200) {
      navigate("/profile");
    }
    if (dataToken.data?.status === 400) {
      alert(dataToken.data.message);
      dispatch(resetLogin());
    }
  }, [dataToken, navigate, dispatch]);

  return (
    <div className="login">
      <Header />
      <div className="main bg-dark login-padding">
        <section className="login-content">
          <i className="fa fa-user-circle login-icon"></i>
          <h1 className="login-title">Sign In</h1>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="input-wrapper">
              <label htmlFor="email" className="form-label">
                Username
              </label>
              <input
                value={userEmail}
                onChange={(e) => setUserEmail(e.target.value)}
                type="text"
                id="email"
                className="form-control"
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password" className="form-label">
                Password
              </label>
              <input
                value={userPassword}
                onChange={(e) => setUserPassword(e.target.value)}
                type="password"
                id="password"
                className="form-control"
              />
            </div>
            <div className="input-remember">
              <input type="checkbox" id="remember-me" />
              <label htmlFor="remember-me" className="form-check-label">
                Remember me
              </label>
            </div>
            <button className="login-button">Sign In</button>
          </form>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
