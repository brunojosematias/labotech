const { response } = require('express');
const ExerciseController = require('./controllers/ExerciseController')


 
app.use(express.json()); 

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

const exercises = [];


app.get('/exercises', (req, res) => {
  res.send(exercises);
});


app.get('/exercises/:id', (req, res) => {
  const exercise = exercises.find(exercise => exercise.id === req.params.id);
  if (!exercise) {
    res.status(404).send('Exercise not found.');
  } else {
    res.send(exercise);
  }
});

// POST
// localhost:3333/exercises

app.post('/exercises', ExerciseController.store);

  // http://localhost:3333/exercises/udgcuyecghiub

app.put('/exercises/:id', (request, response) => {
  const exerciseIndex = exercises.findIndex(exercise => exercise.id === req.params.id);
  if (exerciseIndex === -1) {
    response.status(404).send('Exercise not found.');
  } else {
    exercises[exerciseIndex] = {
      id: request.params.id,
      name: request.body.name,
      description: request.body.description
    };
    response.send(exercises[exerciseIndex]);
  }
});


app.delete('/exercises/:id', (request, response) => {
  const exerciseIndex = exercises.findIndex(exercise => exercise.id === req.params.id);
  if (exerciseIndex === -1) {
    response.status(404).send('Exercise not found.');
  } else {
    exercises.splice(exerciseIndex, 1);
    response.sendStatus(204);
  }
});
const { response } = require('express');
const ExerciseController = require('./controllers/ExerciseController')


 
app.use(express.json()); 

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

const exercises = [];


app.get('/exercises', (req, res) => {
  res.send(exercises);
});


app.get('/exercises/:id', (req, res) => {
  const exercise = exercises.find(exercise => exercise.id === req.params.id);
  if (!exercise) {
    res.status(404).send('Exercise not found.');
  } else {
    res.send(exercise);
  }
});

// POST
// localhost:3333/exercises

app.post('/exercises', ExerciseController.store);

  // http://localhost:3333/exercises/udgcuyecghiub

app.put('/exercises/:id', (request, response) => {
  const exerciseIndex = exercises.findIndex(exercise => exercise.id === req.params.id);
  if (exerciseIndex === -1) {
    response.status(404).send('Exercise not found.');
  } else {
    exercises[exerciseIndex] = {
      id: request.params.id,
      name: request.body.name,
      description: request.body.description
    };
    response.send(exercises[exerciseIndex]);
  }
});


app.delete('/exercises/:id', (request, response) => {
  const exerciseIndex = exercises.findIndex(exercise => exercise.id === req.params.id);
  if (exerciseIndex === -1) {
    response.status(404).send('Exercise not found.');
  } else {
    exercises.splice(exerciseIndex, 1);
    response.sendStatus(204);
  }
});
