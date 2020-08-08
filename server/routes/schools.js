const router = require('express').Router();
let School = require('../models/school.model');

router.route('/').get((req, res) => {
    School.find()
        .then(boards => res.json(boards))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const city = req.body.city;
    const state = req.body.state;
    const board = req.body.board;
    const totalTeachers = Number(req.body.totalTeachers);
    const totalStudents = Number(req.body.totalStudents);
    const regDate = Date.parse(req.body.regDate);

    const newBoard = new School({
        name,
        description,
        city,
        state,
        board,
        totalTeachers,
        totalStudents,
        regDate,
    });

    newBoard.save()
        .then(() => res.json('School added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    School.findById(req.params.id)
        .then(exercise => res.json(exercise))
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