const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;
app.use(cors());

const courses = require('./data/courses.json');


app.get('/', (req, res) => {
    res.send(courses);
});


app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const singleCourse = courses.find(c => c.id === id);
    if (singleCourse) {
        res.send(singleCourse)
    }
    else {
        res.status(404).send('Course not found')
        };
});

app.get('/checkout/:id', (req, res) => {
    const id = req.params.id;
    const singleCard = courses.find(card => card.id === id);
    if (singleCard) {
        res.send(singleCard)
    }
    else {
        res.status(404).send('Course not found')
        }
})


app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})

