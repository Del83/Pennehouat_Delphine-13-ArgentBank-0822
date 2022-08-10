import "../styles/Features.css"

/**
 * Display features item
 * @param {string} icon 
 * @param {string} title 
 * @param {string} text 
 * @component
 */
const FeatureItem = ( props ) => {

    return (
        <div className="feature-item">
            <img
                src={props.icon}
                alt="Chat Icon"
                className="feature-icon"
            />
            <h3 className="feature-item-title">{props.title}</h3>
            <p className="feature-item-text">{props.text}</p>
        </div>
    )
}

export default FeatureItem