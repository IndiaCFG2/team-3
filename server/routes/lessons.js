const router = require('express').Router();
let Lesson = require('../models/lesson.model');

router.route('/').get((req, res) => {
    Lesson.find()
        .then(lessons => res.json(lessons))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const board = req.body.board;
    const type = req.body.type;
    const subject = req.body.subject;
    const grade = Number(req.body.grade);
    const worksheet = Number(req.body.worksheet);
    const division = Number(req.body.division);
    const fileURL = req.body.fileURL;

    const newLesson = new Lesson({
        name,
        description,
        type,
        subject,
        board,
        grade,
        worksheet,
        division,
        fileURL,
    });

    newLesson.save()
        .then(() => res.json('Lesson added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Lesson.findById(req.params.id)
        .then(lesson => res.json(lesson))
        .catch(err => res.status(400).json('Error: ' + err));
});

// router.route('/:id').delete((req, res) => {
//     Exercise.findByIdAndDelete(req.params.id)
//         .then(() => res.json('Exercise deleted.'))
//         .catch(err => res.status(400).json('Error: ' + err));
// });

// router.route('/update/:id').put((req, res) => {
//     const username = req.body.username;
//     const description = req.body.description;
//     const duration = Number(req.body.duration);
//     const date = Date.parse(req.body.date);

//     Exercise.findByIdAndUpdate(
//         req.params.id,
//         {
//             username: username,
//             description: description,
//             duration: duration,
//             date: date
//         }
//         )
//         .then(() => res.json('Exercise updated!'))
//         .catch(err => res.status(400).json('Error: ' + err));
// });

module.exports = router;