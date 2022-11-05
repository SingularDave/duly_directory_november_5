import {all_providers} from "./employees";

// OnRequest is a function that takes a request and returns a response. Response will be all_providers as JSON.
export const OnRequest = () => {
    return all_providers;
}
