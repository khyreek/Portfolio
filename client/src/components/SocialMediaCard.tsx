import { SocialMediaCardData } from "../types/utility";

interface Props extends SocialMediaCardData {}

function SocialMediaCard({ image, alt, href }: Props): JSX.Element {
    return (
        <a href={href} className="social-media-card hover-jump">
            <img className="logo" src={image.src} alt={alt} />
        </a>
    );
}

export default SocialMediaCard;
