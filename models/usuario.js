

const {Schema, model} = require('mongoose')


const UsuarioSchema = Schema({
    //columnas de las entidades
    nombre: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true,
        unique:true,
    },
    password: {
        type: String,
        required:true
    },
    online: {
        type: Boolean,
        default: false
    },

})

//las de flecha no funcionan para esto
//es para que no nos devuelva la contraseña
UsuarioSchema.method('toJSON', function () {
    const {__v, _id, password, ...object} = this.toObject() 
    object.uid = _id
    return object;
})

//moongose pone la s por defecto
module.exports = model('Usuario', UsuarioSchema)
