import { writable } from "svelte/store";
import { v4 as uuidv4 } from "uuid";

import {
    db,
    eq,
    collegeList,
    address_local,
    address_city,
    address_district,
    address_state,
    address_country,
} from "astro:db";

const colleges = await db
    .select()
    .from(collegeList)
    .innerJoin(address_local, eq(collegeList.add_local, address_local.id))
    .innerJoin(address_city, eq(collegeList.add_city, address_city.id))
    .innerJoin(address_district, eq(collegeList.add_district, address_district.id))
    .innerJoin(address_state, eq(collegeList.add_state, address_state.id))
    .innerJoin(address_country, eq(collegeList.add_country, address_country.id));


let Mcolleges = colleges.map((college, index) => {
    return {
        uuid: uuidv4(),
        ...college,
    };
});



const collegelist = writable(Mcolleges);

export { collegelist, Mcolleges };
