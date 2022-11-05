import {all_providers} from "./employees";


export const config = {
    runtime: 'experimental-edge',
}

export default async function () {
    return new Response(
        JSON.stringify(all_providers),
        {
            status: 200,
            headers: {
                'Content-Type': 'application/json'
            }
        }
    )
}