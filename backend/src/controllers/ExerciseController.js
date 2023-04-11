const { request } = require("express");
const { show } = require("./UsersControllers");

class ExerciseController {

    index(request, response) {
        // listar execícios

    }
    
    store(response, response) {
        // registrar o exercício
            const {id} = request.params
            const {name, description} = request.body
          
            const Exercise = {
              id: Date.now().toString(),
              name,
              description,
            };
            exercises.push(exercise);
          response.status(201).send(exercise);}
     
          show(req, res) 
            constExercise = exercises.find(exercise => exercise.id === req.params.id);
            if (exercise) {
              return res.status(404).send('Exercise not found.');
            }  
              return res.send(exercise);
            }
          
        
          store(req, res) 
            const exercise = {
              id: Math.random().toString(36).substr(2, 9),
              name: req.body.name,
              description: req.body.description
            };
            exercises.push(exercise);
            return res.send(exercise);
          
        
          update(req, res) 
            const exerciseIndex = exercises.findIndex(exercise => exercise.id === req.params.id);
            if (exerciseIndex === -1) {
              return res.status(404).send('Exercise not found.');
            } else 
              exercises[exerciseIndex] = {
                id: req.params.id,
                name: req.body.name,
                description: req.body.description
              };
              return res.send(exercises[exerciseIndex]);
            
          
        
          destroy(req, res) 
            const ExerciseIndex = exercises.findIndex(exercise => exercise.id === req.params.id);
            if (exerciseIndex === -1) {
              return res.status(404).send('Exercise not found.');
            } else {
              exercises.splice(exerciseIndex, 1);
              return res.sendStatus(204);
            }
          
        


   
module.exports = new ExerciseController;