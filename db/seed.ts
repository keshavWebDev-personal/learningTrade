import {
    db,
    collegeList,
    address_local,
    address_city,
    address_district,
    address_state,
    address_country,
} from "astro:db";

// https://astro.build/db/seed
export default async function seed() {
    // insert dummy values into all the other tables accept collegelist
    await db.insert(address_local).values([
		{ name: "devsthali" },
		{ name: "mullana" }
	]);
    await db.insert(address_city).values([
		{ name: "mithapur" }, 
		{ name: "mullana" } 
	]);
    await db.insert(address_district).values([{ name: "ambala" }]);
    await db.insert(address_state).values([{ name: "haryana" }]);
    await db.insert(address_country).values([{ name: "india" }]);

    console.log("Starting seeding process...");
    try {
        await db.insert(collegeList).values([
            {
                name: "Ambala College of Engineering",
                alias: "ACE",
                add_local: 1,
                add_city: 1,
                add_district: 1,
                add_state: 1,
                add_country: 1,
            },
            {
                name: "Guru Nanak Institutions",
                alias: "GNI",
                add_local: 2,
                add_city: 2,
                add_district: 1,
                add_state: 1,
                add_country: 1,
            },

			{
				name: "Maharishi Markandeshwar University",
				alias: "MMU",
				add_local: 2,
				add_city: 2,
				add_district: 1,
				add_state: 1,
				add_country: 1,
			},
        ]);
        console.log("Seeding completed successfully!");
    } catch (error) {
        console.error("Error occurred during seeding:", error);
    }
}
