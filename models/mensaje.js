

const {Schema, model} = require('mongoose')


const MensajeSchema = Schema({
    //columnas de las entidades
    de: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required:true
    },
    para: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required:true
    },
    mensaje: {
        type: String,
        required: true
    }


}, {
    timestamps: true
})

//las de flecha no funcionan para esto
//es para que no nos devuelva la contraseña
MensajeSchema.method('toJSON', function () {
    const {__v,  ...object} = this.toObject() 
    return object;
})

//moongose pone la s por defecto
module.exports = model('Mensaje', MensajeSchema)
