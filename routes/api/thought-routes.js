const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thought-controller');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

module.exports = router;
