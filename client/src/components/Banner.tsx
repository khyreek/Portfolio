import { useState } from "react";

import { AppTypes } from "../types";

interface Props extends AppTypes.Element.Div {
    text: string;
}

function Banner({ text, ...otherProps }: Props): JSX.Element {
    const [hovering, setHovering] = useState(false);

    return (
        <div
            {...otherProps}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
        >
            <div className={`${hovering && "banner-text"}`}>{text}</div>
        </div>
    );
}

export default Banner;
