import { defineDb , defineTable, column } from 'astro:db';

const address_local= defineTable({
  columns: {
    id: column.number({ primaryKey: true, autoIncrement: true }),
    name: column.text(),
  }
})

const address_city= defineTable({
  columns: {
    id: column.number({ primaryKey: true, autoIncrement: true }),
    name: column.text(),
  }
})

const address_district= defineTable({
  columns: {
    id: column.number({ primaryKey: true, autoIncrement: true }),
    name: column.text(),
  }
})

const address_state= defineTable({
  columns: {
    id: column.number({ primaryKey: true, autoIncrement: true }),
    name: column.text(),
  }
})

const address_country= defineTable({
  columns: {
    id: column.number({ primaryKey: true, autoIncrement: true }),
    name: column.text(),
  }
})

const collegeList = defineTable({
  columns: {
    id: column.number({ primaryKey: true, autoIncrement: true }),
    name: column.text(),
    alias: column.text(),
    add_local: column.number({references: ()=>address_local.columns.id}),
    add_city: column.number({references: ()=>address_city.columns.id}),
    add_district: column.number({references: ()=>address_district.columns.id}),
    add_state: column.number({references: ()=>address_state.columns.id}),
    add_country: column.number({references: ()=>address_country.columns.id})
  }
})

const CollegeDB = defineDb({
    tables: {
        collegeList,
        address_local,
        address_city,
        address_district,
        address_state,
        address_country,
    },
});

// https://astro.build/db/config
export default defineDb(CollegeDB)
