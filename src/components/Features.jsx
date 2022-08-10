import "../styles/Features.css";
import FeatureItem from "./FeatureItem";
import iconChat from "../assets/img/icon-chat.png";
import iconMoney from "../assets/img/icon-money.png";
import iconSecurity from "../assets/img/icon-security.png";

const titleChat = "You are our #1 priority";
const titleMoney = "More savings means higher rates";
const titleSecurity = "Security you can trust";

const textChat =
  "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.";
const textMoney =
  "The more you save with us, the higher your interest rate will be!";
const textSecurity =
  "We use top of the line encryption to make sure your data and money is always safe.";


const Features = () => {

    return (
        <section className="features">
            <h2 className="sr-only">Features</h2>
            <FeatureItem
            key={"chat"}
            icon={iconChat}
            title={titleChat}
            text={textChat}
            />
            <FeatureItem
            key={"money"}
            icon={iconMoney}
            title={titleMoney}
            text={textMoney}
            />
            <FeatureItem
            key={"security"}
            icon={iconSecurity}
            title={titleSecurity}
            text={textSecurity}
            />
      </section>
    )
}

export default Features