import mongoose from 'mongoose'
const taskSchema = mongoose.Schema({

},{timestamps: true});
module.exports = mongoose.model('Task',taskSchema);