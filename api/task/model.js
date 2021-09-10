// build your `Task` model here
const db = require('../../data/dbConfig');

module.exports = {
    createTask,
    getTasks,
};

async function createTask(post) {
    const [id] = await db('tasks').insert(post);
    return db('tasks').where({ "task_id": id }).first();
}

function getTasks() {
    return db('tasks')
    .leftJoin('projects', 'tasks.project_id', 'projects.project_id')
    .select('task_id', 'task_description', 'task_notes', 'task_completed', 'projects.project_name', 'projects.project_description');
}