import "../styles/Features.css";
import FeatureItem from "./FeatureItem";
import features  from "../data/DataFeatures"

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
                icon={features[0].icon}
                title={features[0].title}
                text={features[0].text}
            />
            <FeatureItem
                key={"money"}
                icon={features[1].icon}
                title={features[1].title}
                text={features[1].text}
            />
            <FeatureItem
                key={"security"}
                icon={features[2].icon}
                title={features[2].title}
                text={features[2].text}
            />
      </section>
    )
}
