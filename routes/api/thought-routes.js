const router = require('express').Router();

// Importing functions from thought controller
const { 
    getAllThoughts, 
    getThoughtById, 
    createThought, 
    updateThought,
    addReaction,
    deleteThought,
    deleteReaction
} = require('../../controllers/thoughtController');

router.route('/')
      .get(getAllThoughts)
      .post(createThought)

router.route('/:id')
      .get(getThoughtById)
      .put(updateThought)
      .delete(deleteThought); 

// router.route('/:userId')    
//       .post(createThought);

router.route('/:thoughtId/reactions')
      .post(addReaction);

router.route('/:thoughtId/reactions/:reactionId')
      .delete(deleteReaction);

module.exports = router;