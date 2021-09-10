// build your `Project` model here
const db = require('../../data/dbConfig');

module.exports = {
    createProject,
    getProjects,
};

async function createProject(post) {
    const [id] = await db('projects').insert(post);
    return db('projects').where({ "project_id": id }).first();
};

function getProjects() {
    return db('projects')
}