import UserAccount from "./UserAccount"
import { checkingTitle, checkingAmount, checkingAmountDescription, savingsTitle, savingsAmount, savingsAmountDescription, creditcardTitle, creditcardAmount, creditcardAmountDescription,}  from "../Data/DataUserAccount"

/**
 * Display user account container
 * @component
 */
export default  function UserAccountsCtn () {
    return (
        <section className="user-accounts-ctn">
            <h2 className="sr-only">Accounts</h2>
            <UserAccount 
                key={"checking"}
                title={checkingTitle}
                amount={checkingAmount}
                amountDescription={checkingAmountDescription}
            />
            <UserAccount 
                key={"savings"}
                title={savingsTitle}
                amount={savingsAmount}
                amountDescription={savingsAmountDescription}
            />
            <UserAccount 
                key={"creditcard"}
                title={creditcardTitle}
                amount={creditcardAmount}
                amountDescription={creditcardAmountDescription}
            />
        </section>
    )
} 