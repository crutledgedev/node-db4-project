
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes_ingredients').insert([
        {quantity: 1, recipes_id: 1, ingredients_id: 3},
        {quantity: 1, recipes_id: 2, ingredients_id: 5},
        {quantity: 1, recipes_id: 3, ingredients_id: 9}
      ]);
    });
};
