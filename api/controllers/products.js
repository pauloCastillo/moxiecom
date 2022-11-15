const { matchedData } = require('express-validator');
const { productsModel } = require('../models');
const handleHttpError = require('../utils/handlerHttpErrors');

const getItems = async (req, res) => {
    try{
        const data = await productsModel.find()
        res.send(data)
    }catch(error){
        console.log(error)
    }
}
const getItem = async (req, res) => {
    try{
        const {id} = matchedData(req)
        const data = await productsModel.findById(id)
        res.send(data)
    }catch(error){
        console.log(error)
    }
}

const createItem = async (req, res) => {
    try {
      const body = matchedData(req);
      const data = await productsModel.create(body);
      res.status(201);
      res.send({ data });
    } catch (e) {
      handleHttpError(res, "ERROR_CREATE_ITEMS");
    }
};

const updateItem = async (req, res) => {
    try {
        const {id, ...body} = matchedData(req);
        const data = await productsModel.findOneAndUpdate(
          id, body
        );
        res.send({ data });
      } catch (e) {
        handleHttpError(res, "ERROR_UPDATE_ITEMS");
      }
};

const deleteItem = async (req, res) => {
    try{
        req = matchedData(req);
        const {id} = req;
        const deleteResponse = await productsModel.delete({_id:id});
        const data = {
          deleted: deleteResponse.matchedCount
        }        
        res.send({data});
      }catch(e){
        console.log(e)
        handleHttpError(res,"ERROR_DELETE_ITEM")
      }
};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem }