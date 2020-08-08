const router = require('express').Router();
let Board = require('../models/board.model');

router.route('/').get((req, res) => {
    Board.find()
        .then(boards => res.json(boards))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const description = req.body.description;
    const code = req.body.code;

    const newBoard = new Board({
        name,
        description,
        code,
    });

    newBoard.save()
        .then(() => res.json('Board added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Board.findById(req.params.id)
        .then(board => res.json(board))
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