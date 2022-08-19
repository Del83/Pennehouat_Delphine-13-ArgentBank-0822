import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
import ProfileHeader from "../components/ProfileHeader";
import ProfileAccountsCtn from "../components/ProfileAccountsCtn";
import { selectProfile, selectToken } from "../utils/selectors";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfile, resetProfile } from "../features/getProfile";

import "../styles/Profile.css";

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
