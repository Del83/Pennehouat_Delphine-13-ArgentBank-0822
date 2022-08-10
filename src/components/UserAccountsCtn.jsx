import UserAccount from "./UserAccount"


const checkingTitle = "Checking (x8349)"
const checkingAmount = "2,082.79"
const checkingAmountDescription = "Available"

const savingsTitle = "Savings (x6712)"
const savingsAmount = "10,928.42"
const savingsAmountDescription = "Available"

const creditcardTitle = "Credit Card (x8349)"
const creditcardAmount = "184.30"
const creditcardAmountDescription = "Current"

const UserAccountsCtn = () => {

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

export default UserAccountsCtn