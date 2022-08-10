import "../styles/Features.css";
import FeatureItem from "./FeatureItem";
import iconChat from "../assets/img/icon-chat.png";
import iconMoney from "../assets/img/icon-money.png";
import iconSecurity from "../assets/img/icon-security.png";
import {titleChat, titleMoney, titleSecurity, textChat, textMoney, textSecurity,}  from "../Data/DataFeatures"

/**
 * Display features
 * @component
 */
export default function Features () {
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
