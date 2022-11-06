import {all_providers} from "./employees";

// OnRequest is a function that takes a request and returns a response. Response will be all_providers as JSON.

export const config = {
    runtime: 'experimental-edge',
}

export default async function handler() {
    return new Response(
        JSON.stringify({
            all_providers
        }),
        {
            status: 200,
            headers: {
                'content-type': 'application/json',
            },
        }
    )
}
