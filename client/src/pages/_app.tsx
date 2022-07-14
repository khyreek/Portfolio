import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { Provider } from "react-redux";

import {
    generalMetasData,
    mySelfMarkings,
    socialMediaMetasData,
} from "../../settings/metas";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import GeneralMetas from "../components/SEO/GeneralMetas";
import MarkingMyselfMetas from "../components/SEO/MarkingMyselfMetas";
import SocialMediaMetas from "../components/SEO/SocialMediaMetas";
import InitializeApp from "../initializeApp";
import store from "../redux/store";
import "../styles/app.scss";

export default function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();

    const goToHomepage = () => {
        router.push("/");
    };

    return (
        <Provider store={store}>
            <div className="app">
                <InitializeApp />

                {/* SEO */}
                <GeneralMetas generalMetasData={generalMetasData} />
                <SocialMediaMetas socialMediaMetasData={socialMediaMetasData} />
                <MarkingMyselfMetas selfMarkingsData={mySelfMarkings} />

                <Banner
                    className="banner-message"
                    text="Frederic Tu"
                    onClick={goToHomepage}
                />

                {/* page */}
                <Header />
                <Component {...pageProps} />
                <Footer />
            </div>
        </Provider>
    );
}
