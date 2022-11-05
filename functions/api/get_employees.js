import {all_providers} from "./employees";

// add event listener to the serverless function
addEventListener("fetch", event => {
    event.respondWith(handleRequest(event.request));
});

// Make handleRequest to respond to http request. Return json of all_providers.
async function handleRequest() {
    return new Response(JSON.stringify(all_providers), {
        headers: {
            "content-type": "application/json;charset=UTF-8",
        },
    });
}