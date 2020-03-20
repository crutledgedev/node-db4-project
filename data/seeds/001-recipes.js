
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, title: 'some recipe', instructions: 'do some stuffs'},
        {id: 2, title: 'some new recipe', instructions: 'do some new stuffs'},
        {id: 3, title: 'No Bake Something', instructions: 'Mix and Eat'}
      ]);
    });
};
