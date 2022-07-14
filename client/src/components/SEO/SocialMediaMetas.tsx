import Head from "next/head";

import { AppTypes } from "../../types";
import { getMappableMetaTags } from "../../utils/methods/SEOHelpers";

import SocialMediaMetaTag from "./SocialMediaMetaTag";

interface Props {
    socialMediaMetasData: AppTypes.SEO.SocialMediaMetasData;
}

function SocialMediaMetas({ socialMediaMetasData }: Props): JSX.Element {
    const mappableMetaData = getMappableMetaTags(socialMediaMetasData);

    return (
        <Head>
            {/* itemProp are different from name for SEO, see: https://schema.org/ */}
            <meta itemProp="name" content={socialMediaMetasData.title} />
            <meta
                itemProp="description"
                content={socialMediaMetasData.description}
            />
            <meta itemProp="image" content={socialMediaMetasData.image?.src} />

            {mappableMetaData.map((metaData) => (
                <SocialMediaMetaTag
                    key={metaData.name}
                    name={metaData.name}
                    content={metaData.content}
                />
            ))}
        </Head>
    );
}

export default SocialMediaMetas;
