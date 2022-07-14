import { CLIENT_BUILD_ENVIRONMENT } from "../../../settings/clientBuildEnvironment";
import { NodeEnvironments } from "../enums";

function xIfDevElseY<T>(ifDev: T, ifProd: T): T {
    /**
     * Return the first argument if the current client build
     * evnrionemtn is set to 'development' otherwise return
     * the second.
     */
    
    return CLIENT_BUILD_ENVIRONMENT === NodeEnvironments.DEVELOPMENT
        ? ifDev
        : ifProd;
}

export { xIfDevElseY };
