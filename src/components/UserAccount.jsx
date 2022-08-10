
/**
 * Display user account
 * @param {string} title 
 * @param {number} amount  
 * @param {string} amountDescription 
 * @component
 */
const UserAccount = ( props ) => {

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

export default UserAccount