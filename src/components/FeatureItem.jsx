import propTypes from 'prop-types';
import "../styles/Features.css"

/**
 * Display features item
 * @param {string} icon features icon
 * @param {string} title features title
 * @param {string} text features text
 * @component
 */
 export default function FeatureItem ( props ) {

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

FeatureItem.propTypes = {
    icon: propTypes.string,
    title: propTypes.string,
    text: propTypes.string,
}