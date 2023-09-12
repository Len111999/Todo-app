const router = require('express').Router();
const todoItemsModel = require('../models/todoItems');

//Añadir
router.post('/api/item', async (req, res)=>{
    try{
      const newItem = new todoItemsModel({
        item: req.body.item
      })
      //Guardar en la base de datos
      const saveItem = await newItem.save()
      res.status(200).json(saveItem);
    }catch(err){
      res.json(err);
    }
  })
//Segunda ruta Tomar
router.get('/api/items', async (req, res)=>{
    try{
      const allTodoItems = await todoItemsModel.find({});
      res.status(200).json(allTodoItems)
    }catch(err){
      res.json(err);
    }
  })
//Actualizar
router.put('/api/item/:id', async (req, res)=>{
    try{
      //find the item by its id and update it
      const updateItem = await todoItemsModel.findByIdAndUpdate(req.params.id, {$set: req.body});
      res.status(200).json(updateItem);
    }catch(err){
      res.json(err);
    }
  })
//Eliminar
router.delete('/api/item/:id', async (req, res)=>{
    try{
      //Busca el id y lo elimina
      const deleteItem = await todoItemsModel.findByIdAndDelete(req.params.id);
      res.status(200).json('Item Deleted');
    }catch(err){
      res.json(err);
    }
  })
  
module.exports = router;