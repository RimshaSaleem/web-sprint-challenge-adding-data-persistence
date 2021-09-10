// build your `/api/resources` router here
const router = require('express').Router();
const Model = require('./model');

router.post('/', (req, res, next) => {
    const newResource = req.body;

    Model.createResource(newResource)
        .then(newPost => {
            res.status(201).json(newPost);
        })
        .catch(err => next(err))
});

router.get('/', (req, res, next) => {
    Model.getResources()
        .then(resources => {
            res.json(resources);
        })
        .catch(err => next(err))
});

module.exports = router;