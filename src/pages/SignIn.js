import SignInModal from "../components/SignInModal";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import "../styles/SignIn.css";

const SignIn = () => {
  return (
    <div className="SignIn">
      <Header />
      <div className="main bg-dark padding-sign-in">
        <SignInModal />
      </div>
      <Footer />
    </div>
  );
};

export default SignIn;
