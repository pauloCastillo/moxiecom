const { matchedData } = require('express-validator');
const { categoriesModel } = require('../models');
const handleHttpError = require('../utils/handlerHttpErrors');

const getCategories = async (req, res) => {
    try{
        const data = await categoriesModel.find({})
        res.send(data)
    }catch(error){
        console.log(error)
    }
}
const getCategory = async (req, res) => {
    try{
        const {id} = matchedData(req)
        const data = await categoriesModel.findById(id)
        res.send(data)
    }catch(error){
        console.log(error)
    }
}

const createCategory = async (req, res) => {
    try {
      const body = matchedData(req);
      const data = await categoriesModel.create(body);
      res.status(201);
      res.send({ data });
    } catch (e) {
      handleHttpError(res, "ERROR_CREATE_ITEMS");
    }
};

const updateCategory = async (req, res) => {
    try {
        const {id, ...body} = matchedData(req);
        const data = await categoriesModel.findOneAndUpdate(
          id, body
        );
        res.send({ data });
      } catch (e) {
        handleHttpError(res, "ERROR_UPDATE_ITEMS");
      }
};

const deleteCategory = async (req, res) => {
    try{
        req = matchedData(req);
        const {id} = req;
        const deleteResponse = await categoriesModel.delete({_id:id});
        const data = {
          deleted: deleteResponse.matchedCount
        }        
        res.send({data});
      }catch(e){
        console.log(e)
        handleHttpError(res,"ERROR_DELETE_ITEM")
      }
};

module.exports = { getCategories, getCategory, createCategory, updateCategory, deleteCategory }