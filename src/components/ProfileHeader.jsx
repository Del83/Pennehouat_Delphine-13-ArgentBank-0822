import propTypes from 'prop-types';
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "../utils/selectors";
import { fetchProfile } from '../features/getProfile';
import { sendUpdateProfile } from '../features/sendProfile';
import "../styles/Profile.css"
// import { useDispatch, useSelector } from "react-redux";
// import { selectToken } from "../utils/selectors";
// import { fetchOrUpdateUser } from "../features/getUser";

/**
 * Display profile header
 * @param {string} firstname 
 * @param {string} lastname  
 * @component
 */
export default function ProfileHeader ({firstname, lastname}) {
    const [edit, setEdit] = useState(false);
    const [editedFirstName, setEditedFirstName] = useState("");
    const [editedLastName, setEditedLastName] = useState("");

    const newIdentify = { firstName : editedFirstName, lastName: editedLastName };

    const dataToken = useSelector(selectToken);
    //const dataUser = useSelector(selectProfile);
    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(sendUpdateProfile(dataToken, newIdentify));
        setEdit(false)
      };

      useEffect(() => {
        dispatch(fetchProfile(dataToken));
      }, [dispatch, dataToken, newIdentify]);

      return (
       <div>
            <div className= {edit ? "display-none profile-header" : "profile-header"}>
                <h1>Welcome back
                    <br/>
                    {firstname} {lastname}!</h1>
                <button className="edit-button" onClick={() => setEdit(true)} >Edit Name</button>
            </div>

            <div className={edit ? "profile-header" : "display-none profile-header"}>
                <h1>Welcome back</h1>
                <br/>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className="edit-profile-name">
                        <input className="edit-profile-input" type="text" placeholder={firstname} value={editedFirstName} onChange={ (e) => setEditedFirstName(e.target.value)}/>
                        <input className="edit-profile-input" type="text" placeholder={lastname} value={editedLastName} onChange={ (e) => setEditedLastName(e.target.value)}/> 
                    </div>
                    <br/>   
                    <div className="edit-profile-name">
                        <button className="edit-profile-button" onClick={(e) => handleSubmit(e)}>Save</button>
                        <button className="edit-profile-button" onClick={() => setEdit(false)}>Cancel</button>
                    </div>  
                </form>
                     
            </div>

       </div>
    )
}

ProfileHeader.propTypes = {
    firstname: propTypes.string,
    lastname: propTypes.string,
}