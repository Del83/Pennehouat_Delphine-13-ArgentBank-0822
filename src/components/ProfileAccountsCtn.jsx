import ProfileAccount from "./ProfileAccount"
import profileAccount  from "../data/DataProfileAccount"

/**
 * Display user account container
 * @component
 */
export default  function ProfileAccountsCtn () {
    return (
        <section className="accounts-ctn">
            <h2 className="sr-only">Accounts</h2>
            <ProfileAccount 
                key={"checking"}
                title={profileAccount[0].checkingTitle}
                amount={profileAccount[0].checkingAmount}
                amountDescription={profileAccount[0].checkingAmountDescription}
            />
            <ProfileAccount 
                key={"savings"}
                title={profileAccount[1].savingsTitle}
                amount={profileAccount[1].savingsAmount}
                amountDescription={profileAccount[1].savingsAmountDescription}
            />
            <ProfileAccount 
                key={"creditcard"}
                title={profileAccount[2].creditcardTitle}
                amount={profileAccount[2].creditcardAmount}
                amountDescription={profileAccount[2].creditcardAmountDescription}
            />
        </section>
    )
} 