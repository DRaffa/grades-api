import mongoose from 'mongoose'; // Erase if already required

// Declare the Schema of the Mongo model
var gradeSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    value:{
        type:Number,
        required:true,
        validate(value) {
            if (value < 0) {
                throw new Error('Valor negativo para a nota não é permitido');
            }
        }
    },
    lastModified:{
        type:Date,
        default: Date.now()
    }
});

//Export the model
const gradeModel = mongoose.model('grade', gradeSchema, 'grade');

export { gradeModel };