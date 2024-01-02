import mongoose from "mongoose"

const bookSchema = new mongoose.Schema({
   
        bookname:{
            type:String,
            require:true
        },
        price:{
            type: String,
            require: true
        },
        quantity:{
            type: Number,
            require: true
        }, 
        author:{
            type: String,
            require: true
        },  

},
    { timestamps: true }
)

const bookModel = mongoose.model("book",bookSchema)

export default bookModel