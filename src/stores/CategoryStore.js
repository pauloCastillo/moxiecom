import { defineStore } from 'pinia'
import axios from 'axios'

export const useCategoryStore = defineStore('CategoryStore', {
  state:() => {
    return{
      categories:[],
    }
  },
  getters:{
    allCategories(state){
      return state.categories
    }
  },
  actions:{
    async getAllCategories(){
      await axios.get('http://localhost:8080/api/category')
      .then(response => this.categories.push(response.data))
      .catch(error => console.log(error))
    }
  }
})
