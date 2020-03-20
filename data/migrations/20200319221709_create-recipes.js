exports.up = function (knex) {
    return knex.schema
        .createTable('recipes', tbl => {
            tbl.increments();

            tbl.varchar('title', 255)
                .notNullable()
                .index();

            tbl.varchar('instructions', 1000)
                .notNullable();
        })

        .createTable('ingredients', tbl => {
            tbl.increments();

            tbl.varchar('name', 255)
                .unique()
                .notNullable();

        })
        .createTable('recipes_ingredients', tbl => {

            tbl.float('quantity')
                .notNullable();

            tbl.integer('recipes_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('recipes')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')

            tbl.integer('ingredients_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('ingredients')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        })
};

exports.down = function (knex) {
    return knex.schema
    .dropTableIfExists('recipes_ingredients')
    .dropTableIfExists('ingredients')
    .dropTableIfExists('recipes')
};