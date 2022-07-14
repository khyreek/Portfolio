import Image from "next/image";

import { SocialMediaCardData } from "../types/utility";
import tface from "../../public/images/temp-face.png";

interface Props {}

function LeftCover({}: Props): JSX.Element {
    return (
        <div className="left-cover">
            <img src={tface.src} alt="my face" />
        </div>
    );
}

export default LeftCover;
