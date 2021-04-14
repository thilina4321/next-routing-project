import mongoose from 'mongoose'

const con = mongoose.createConnection('mongodb://127.0.0.1/events')
const Schema = mongoose.Schema

const comment = new Schema({
    email:{type:String},
    comment:{type:String}
})

// export default con.model('com', comment)

