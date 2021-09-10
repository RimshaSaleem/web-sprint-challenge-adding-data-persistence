// build your `/api/projects` router here
const router = require('express').Router();
const Model = require('./model');

router.post('/', (req, res, next) => {
    const newProject = req.body;
    Model.createProject(newProject)
        .then(newPost => {
            if (newPost.project_completed === 0) {
                newPost.project_completed = false;
                res.status(201).json(newPost)
            }else {
                newPost.project_completed = true;
                res.status(201).json(newPost)
            }
        })
        .catch(err => next(err))
});

router.get('/', (req, res, next) => {
    Model.getProjects()
        .then(projects => {
            const projList = projects.map(proj => {
                if (proj.project_completed === 0) {
                    proj.project_completed = false;
                    return proj
                }else {
                    proj.project_completed = true;
                    return proj;
                }
            })
            res.json(projList)
        })
        .catch(err => next(err))
});

module.exports = router;