import mongoose from 'mongoose'
const Schema = mongoose.Schema

const comment = new Schema({
    email:{type:String},
    comment:{type:String}
})

let model;

try {
    model = mongoose.model('cm')
} catch (error) {
    model = mongoose.model('cm', comment)
}

export default model





