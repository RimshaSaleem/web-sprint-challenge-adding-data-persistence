
exports.up = function(knex) {
    return knex.schema.createTable('project_resources', tbl => {
        tbl
        .integer('project_id')
        .unsigned()
        .notNullable()
        .references('projects.project_id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
        tbl
        .integer('resource_id')
        .unsigned()
        .notNullable()
        .references('resources.resource_id')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('project_resources');
  };