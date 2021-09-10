// build your `Resource` model here
const db = require('../../data/dbConfig');

module.exports = {
    createResource,
    getResources,
}

function getResources() {
    return db('resources').select('*');
};

async function createResource(post) {
    const [id] = await db('resources').insert(post);
    return db('resources').where({ "resource_id": id}).first();
};