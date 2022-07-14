import CharacterArrayToSentence from "../components/flexible/CharacterArrayToSentence";
import LeftCover from "../components/LeftCover";
import { SocialMediaCardData } from "../types/utility";
import { addTransition } from "../utils/methods/independentHelpers";
import ghLogo from "../../public/images/github-logo.png";
import lnLogo from "../../public/images/linkedin-logo.png";
import SocialMediaCard from "../components/SocialMediaCard";
import { useAppSelector } from "../redux/hooks";

const socialMediaCards: SocialMediaCardData[] = [
    {
        image: ghLogo,
        alt: "github",
        href: "https://github.com/khyreek",
    },
    {
        image: lnLogo,
        alt: "linkedin",
        href: "https://www.linkedin.com/in/frederic-tu/",
    },
];

interface Props {}

function Home({}: Props): JSX.Element {
    const lines = [
        "I'm an Ontario-born,",
        "Asian-Canadian",
        "high schooler",
        "with no facial hair.",
    ];
    const { transitionController } = useAppSelector((state) => state.aesthetic);

    return (
        <div>
            <LeftCover />

            <section className="first-section">
                <div className="first-description-container">
                    {lines.map((line) => (
                        <CharacterArrayToSentence
                            key={line}
                            ref={addTransition(transitionController, "b")}
                            className="first-description"
                            text={line}
                            letterAnimation="hover-shake"
                        />
                    ))}
                </div>

                <div
                    className="social-medias"
                    ref={addTransition(transitionController, "l")}
                >
                    {socialMediaCards.map((socialMediaCard) => (
                        <SocialMediaCard
                            key={socialMediaCard.alt}
                            image={socialMediaCard.image}
                            alt={socialMediaCard.alt}
                            href={socialMediaCard.href}
                        />
                    ))}
                </div>
            </section>

            {/* this is used for the layered waves transition */}
            <div className="spacer svg-trans-1"></div>
            <section className="secondary-section">
                <header ref={addTransition(transitionController, "r")}>
                    <span className="new-keyword-highlight">new</span>{" "}
                    <span className="object-type-highlight">Description</span>
                    {"<"}
                    <span className="object-type-highlight">S</span>{" "}
                    <span className="new-keyword-highlight">extends</span>{" "}
                    <span className="object-type-highlight">FirstPage</span>
                    {">"}
                    <span className="first-layer-bracket-highlight">()</span>
                </header>

                <div
                    className="description"
                    ref={addTransition(transitionController, "tl")}
                >
                    I&apos;m also a former{" "}
                    <span className="desc-highlight">data analyst</span> at
                    Engage Peel,{" "}
                    <span className="desc-highlight">
                        looking for a general software internship
                    </span>
                    . Currently working on my first serious website and
                    brainstorming startup ideas. In my other free time, I enjoy
                    listening to music, solving puzzles, trying bar freestyles,
                    badminton, and playing rocket league.
                </div>
            </section>
        </div>
    );
}

export default Home;
