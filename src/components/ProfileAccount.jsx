import propTypes from 'prop-types';

/**
 * Display user account
 * @param {string} title 
 * @param {string} amount  
 * @param {string} amountDescription 
 * @component
 */
export default function ProfileAccount ( props ) {

    return (
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">Argent Bank {props.title}</h3>
                <p className="account-amount">${props.amount}</p>
                <p className="account-amount-description">{props.amountDescription} Balance</p>
            </div>
                <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
            </div>
      </section>
    )
} 

ProfileAccount.propTypes = {
    title: propTypes.string,
    amount: propTypes.string,
    amountDescription: propTypes.string,
}