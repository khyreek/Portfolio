import { AppTypes } from "../../types";

function getMappableMetaTags({
    twitterCard,
    twitterCompanyUser,
    twitterCreatorUser,

    type,
    url,

    title,
    description,
    image,
}: AppTypes.SEO.SocialMediaMetasData): AppTypes.SEO.MappableMetaTagData[] {
    /**
     * Given the data, create a configuration of meta tags that cover all
     * necessary social media platforms. This way prevents repetition from having
     * an array of objects with the different keys for each platform, while
     * having the same values.
     */
    
    return [
        { name: "twitter:card", content: twitterCard },
        {
            name: "twitter:site",
            content: twitterCompanyUser,
        },
        {
            name: "twitter:creator",
            content: twitterCreatorUser,
        },

        { name: "twitter:title", content: title },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: image.src },

        { name: "og:title", content: title },
        { name: "og:description", content: description },
        { name: "og:image", content: image.src },

        { name: "og:type", content: type },
        { name: "og:url", content: url },
        {
            name: "og:url",
            content: url,
        },
    ];
}

export { getMappableMetaTags };
