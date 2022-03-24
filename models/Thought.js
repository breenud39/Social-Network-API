const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const dateFormat = require('../utils/dateFormat');

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;