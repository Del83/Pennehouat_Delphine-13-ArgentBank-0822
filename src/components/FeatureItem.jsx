import "../styles/Features.css"
import propTypes from 'prop-types';

/**
 * Display features item
 * @param {string} icon 
 * @param {string} title 
 * @param {string} text 
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