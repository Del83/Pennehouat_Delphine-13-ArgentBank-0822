import propTypes from 'prop-types';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectToken } from "../utils/selectors";
import { fetchProfile } from '../features/getProfile';
import { sendUpdateProfile } from '../features/sendProfile';
import "../styles/Profile.css"

/**
 * Display profile header
 * @param {string} firstname user's first name
 * @param {string} lastname user's last name
 * @component
 */
export default function ProfileHeader ({firstname, lastname}) {
    const [edit, setEdit] = useState(false);
    const [editedFirstName, setEditedFirstName] = useState(firstname);
    const [editedLastName, setEditedLastName] = useState(lastname);

    const newIdentify = { firstName : editedFirstName, lastName: editedLastName };

    const dataToken = useSelector(selectToken);
    const dispatch = useDispatch();
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(sendUpdateProfile(dataToken, newIdentify));
        setEdit(false)
        dispatch(fetchProfile(dataToken));
      };

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
                        <input className="edit-profile-input" type="text" placeholder={firstname} onChange={ (e) => setEditedFirstName(e.target.value)} value={editedFirstName} />
                        <input className="edit-profile-input" type="text" placeholder={lastname} onChange={ (e) => setEditedLastName(e.target.value)} value={editedLastName} /> 
                    </div>
                    <br/>   
                    <div className="edit-profile-name">
                        <button className="edit-profile-button" onClick={(e) => handleSubmit(e)}>Save</button>
                        <button className="edit-profile-button" onClick={() => { 
                            setEdit(false)
                            setEditedFirstName(firstname)
                            setEditedLastName(lastname)}}
                             >Cancel</button>
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