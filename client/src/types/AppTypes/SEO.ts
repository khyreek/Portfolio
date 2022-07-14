import { StaticImageData } from "next/image";

import { TwitterCardTypes, OGCardTypes } from "../../utils/enums";

/**
 * Export to ./AppTypes
 */

interface GeneralMetasData {
    title: string;
    keywords: string;
    description: string;
    image: StaticImageData;
    author: string;
}

interface SocialMediaMetasData {
    // twitter specific
    twitterCard: TwitterCardTypes;
    twitterCompanyUser: string; // make account for website - max 200 chars
    twitterCreatorUser: string; // link my twitter @account

    // og
    type: OGCardTypes;
    url: string;

    // general
    title: string; // max 70 chars
    description: string;
    image: StaticImageData; // .src: max 5mb
}

interface MappableMetaTagData {
    name: string;
    content: string;
}

interface SocialMediaMetaElementData {
    name: `my-${string}`;
    content: string;
}

export type {
    GeneralMetasData,
    SocialMediaMetasData,
    MappableMetaTagData,
    SocialMediaMetaElementData,
};
