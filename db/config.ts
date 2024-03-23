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
    add_local: column.text({references: ()=>address_local.columns.name}),
    add_city: column.text({references: ()=>address_city.columns.name}),
    add_district: column.text({references: ()=>address_district.columns.name}),
    add_state: column.text({references: ()=>address_state.columns.name}),
    add_country: column.text({references: ()=>address_country.columns.name})
  }
})

const CollegeDB = defineDb({ tables: { collegeList } });

// https://astro.build/db/config
export {CollegeDB}
