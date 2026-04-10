import { getDestinations } from "./fetch.js";

const test = async () => {
    let data = await getDestinations();
    console.log(data);
};

test();