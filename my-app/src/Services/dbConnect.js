import mongoose from 'mongoose'

const todoSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        maxLength :[40, 'title tidak lebih dari 40 karakter'],
    },
    description : {
        type: String,
        required: true,
        maxLength: [200, "tidak lebih dari 200 karakter"]
    }
    
}) 

module.exports = mongoose.models.Note