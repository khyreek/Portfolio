import Head from "next/head";

import { AppTypes } from "../../types";

interface Props {
    generalMetasData: AppTypes.SEO.GeneralMetasData;
}

function GeneralMetas({ generalMetasData }: Props) {
    return (
        <Head>
            {/* delete when done */}
            <meta name="bruh" content="bruh" />

            {/* for media queries */}
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
                key="viewport"
            />
            <meta charSet="UTF-8" key="charset" />
            <link rel="icon" href={generalMetasData.image?.src} key="icon" />
            <title key="title">{generalMetasData.title}</title>

            <meta
                name="keywords"
                content={generalMetasData.keywords}
                key="keywords"
            />
            <meta
                name="description"
                content={generalMetasData.description}
                key="description"
            />
            <meta
                name="author"
                content={generalMetasData.author}
                key="author"
            />
        </Head>
    );
}

export default GeneralMetas;
