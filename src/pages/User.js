import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import UserHeader from "../components/UserHeader";
import UserAccountsCtn from "../components/UserAccountsCtn";
import "../styles/User.css";

const User = () => {
  return (
    <div className="user ">
      <Header />
      <div className="main bg-dark padding-user">
        <UserHeader />
        <UserAccountsCtn />
      </div>
      <Footer />
    </div>
  );
};

export default User;
