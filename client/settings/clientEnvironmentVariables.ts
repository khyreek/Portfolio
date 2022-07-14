import { ClientBuildSettings } from "../src/types/utility";
import { xIfDevElseY } from "../src/utils/methods/settingsHelpers";
import { noNullishValuesCheck } from "../src/clientDebugging";

const ENVS: ClientBuildSettings = {
    SSL_IS_SELF_SIGNED: !!process.env.NEXT_PUBLIC_SSL_IS_SELF_SIGNED,

    BASE_URL: xIfDevElseY(
        process.env.NEXT_PUBLIC_BASE_URL_DEV,
        process.env.NEXT_PUBLIC_BASE_URL_PROD
    ) as string,
    WS_BASE_URL: xIfDevElseY(
        process.env.NEXT_PUBLIC_BASE_URL_DEV,
        process.env.NEXT_PUBLIC_BASE_URL_PROD
    )
        ?.replace("https://", "wss://")
        .replace("http://", "ws://") as string,
};
noNullishValuesCheck(ENVS);

export { ENVS };
