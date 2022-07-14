import { AppTypes } from "../src/types";
import { OGCardTypes, TwitterCardTypes } from "../src/utils/enums";
import browserIcon from "../public/images/temp-face.png";
import socialMediaCardIcon from "../public/images/temp-face.png";

const generalMetasData: AppTypes.SEO.GeneralMetasData = {
    title: "Frederic Tu",
    keywords: "frederictu portfolio website developer web software engineer",
    description: "Frederic Tu's portfolio website.",

    image: browserIcon,
    author: "Frederic Tu",
};

const socialMediaMetasData: AppTypes.SEO.SocialMediaMetasData = {
    // twit
    twitterCard: TwitterCardTypes.SUMMARY_LARGE_IMAGE,
    twitterCompanyUser: "n/a",
    twitterCreatorUser: "n/a",

    // og
    url: "n/a",
    type: OGCardTypes.WEBSITE,

    // general
    title: "Frederic Tu - Portfolio Website",
    description: "Frederic Tu's portfolio website.",
    image: socialMediaCardIcon,
};

const mySelfMarkings: AppTypes.SEO.SocialMediaMetaElementData[] = [
    {
        name: "my-message",
        content: "SUp, ",
    },
];

export { generalMetasData, socialMediaMetasData, mySelfMarkings };
