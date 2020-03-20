
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'love'},
        {id: 2, name: 'sugar'},
        {id: 3, name: 'spice'}
      ]);
    })
};
