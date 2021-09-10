
exports.up = function(knex) {
    return knex.schema.createTable('tasks', tbl => {
        tbl.increments('task_id');
        tbl.string('task_description')
        .notNullable();
        tbl.string('task_notes');
        tbl.boolean('task_completed').defaultTo(false);
        tbl
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('projects.project_id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('tasks');
  };