import {all_providers} from "./employees";

export const config = {
    runtime: 'experimental-edge',
}

export default async function handler(req, res) {
    return new Response(JSON.stringify(all_providers), {
        status: 200,
        headers: {
            'content-type': 'application/json',
        },
    })
}

