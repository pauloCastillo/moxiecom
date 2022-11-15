import { defineStore } from 'pinia'
import axios from 'axios'

export const useProductStore = defineStore('ProductStore', {
  state:() => {
    return{
      products:[],
      cart:[]
    }
  },
  getters:{
    allProducts(state){
      return state.products
    }
  },
  actions:{
    getAllProducts(){
      axios.get('http://localhost:8080/api/products')
      .then(response => console.log(response))
      .catch(error => console.log(error))
    }
  }
})
