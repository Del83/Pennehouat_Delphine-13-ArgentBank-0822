import "../styles/User.css"

/**
 * Display user header
 * @component
 */
export default function UserHeader () {
    return (
        <div className="user-header">
            <h1>Welcome back<br />Tony Jarvis!</h1>
            <button className="edit-button">Edit Name</button>
        </div>
    )
}

