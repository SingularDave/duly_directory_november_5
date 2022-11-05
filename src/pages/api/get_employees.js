import {all_providers} from "./employees";

export default function handler(req, res) {
    res.status(200).json(all_providers);
}