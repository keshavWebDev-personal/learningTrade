import { writable } from "svelte/store";
import colleges from "../../../data/collegelist.json";
import { v4 as uuidv4 } from "uuid";
import "../../get_started.interface.ts";

let Mcolleges = colleges.map((college, index) => {
    return {
        id: uuidv4(),
        ...college,
    };
});

const collegelist = writable(Mcolleges);

export { collegelist, Mcolleges };
