// build your `/api/tasks` router here
const router = require('express').Router();
const Model = require('./model');

router.post('/', (req, res, next) => {
    const newTask = req.body;
    Model.createTask(newTask)
        .then(newPost => {
            if (newPost.task_completed === 0) {
                newPost.task_completed = false;
                res.status(201).json(newPost);
            }else {
                newPost.task_completed = true;
                res.status(201).json(newPost);
            }
        })
        .catch(err => next(err))
});

router.get('/', (req, res, next) => {
    Model.getTasks()
        .then(tasks => {
            const taskList = tasks.map(task => {
                if (task.task_completed === 0) {
                    task.task_completed = false;
                    return task;
                }else {
                    task.task_completed = true;
                    return task;
                }
            })

            res.json(taskList);
        })
        .catch(err => next(err))
});

module.exports = router;