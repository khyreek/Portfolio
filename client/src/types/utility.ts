import { StaticImageData } from "next/image";

// character animations ---------------------------------------------------
interface MappableCharacter {
    id: string;
    character: string;
}

interface MappableWord {
    id: string;
    characters: MappableCharacter[];
}

interface ClientBuildSettings {
    SSL_IS_SELF_SIGNED: boolean;
    BASE_URL: string;
    WS_BASE_URL: string;
}

type TimeRepresentation =
    | "millisecond"
    | "second"
    | "minute"
    | "hour"
    | "day"
    | "week"
    | "month"
    | "year";

type EpochTime = number;

type TransitionStartingDirection =
    /**
     * l = left
     * r = right
     * t = top
     * b = bottom
     * tl = top left
     * tr = top right
     * bl = bottom left
     * br = bottom right
     */
    | "no-transition"
    | "in-place"
    | "l"
    | "r"
    | "t"
    | "b"
    | "tl"
    | "tr"
    | "bl"
    | "br";

interface SocialMediaCardData {
    image: StaticImageData;
    alt: string;
    href: string;
}

interface Blog {
    link: string;
    title: string;
}

export type {
    ClientBuildSettings,
    TimeRepresentation,
    EpochTime,
    TransitionStartingDirection,
    MappableCharacter,
    MappableWord,
    SocialMediaCardData,
    Blog,
};
