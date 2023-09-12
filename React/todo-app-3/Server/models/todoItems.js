//Importar
const mongoose = require('mongoose');
const TodoItemSchema = new mongoose.Schema({
  item:{
    type:String,
    required: true
  },
  completado: {
    type: Boolean,
    default: false
  }
})
module.exports = mongoose.model('todo', TodoItemSchema);