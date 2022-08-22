import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// PAGE COMPONENTS
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import ProfileHeader from "../components/ProfileHeader";
import ProfileAccountsCtn from "../components/ProfileAccountsCtn";
// DATA et ACTIONS
import { selectProfile, selectToken } from "../utils/selectors";
import { fetchProfile } from "../features/getProfile";
// CSS
import "../styles/Profile.css";

/**Render the profil page
 * @return {JSX}
 */
const Profile = () => {
  const dataToken = useSelector(selectToken);
  const dataUser = useSelector(selectProfile);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProfile(dataToken));
  }, [dispatch, dataToken]);

  const firstNameUser = dataUser.data?.body.firstName;
  const lastNameUser = dataUser.data?.body.lastName;

  return (
    <div className="profile">
      <Header firstname={firstNameUser} />
      <div className="main bg-dark profil-padding">
        <ProfileHeader firstname={firstNameUser} lastname={lastNameUser} />
        <ProfileAccountsCtn />
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
