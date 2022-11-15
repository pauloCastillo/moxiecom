<script setup>
import BaseCard from "@/components/ui/BaseCard.vue"
import CarrouselView from "./ui/CarrouselView.vue"
import {useProductStore} from "@/stores/ProductStore"
import { onMounted, computed } from "vue";
const store  = useProductStore()
onMounted(async ()=>{
    await store.getAllProducts() 
})
const products = computed(()=>{
    return store.allProducts
})
</script>

<template>
<carrousel-view>
    <base-card v-for="product in products" :key="product.id">
        <template #card-header>
            <img :src=product.ImageProduct :alt=product.ImageProduct class="imageHeader" />
        </template>
        <template #card-body>
            <h4 class="title">{{ product.Name }} Nombre</h4>
            <p class="description">{{ product.shortDescription }} Aqui la descripcion corta del producto </p>
            <p class="price">{{ product.Price }} Bs</p>
        </template>
        <template #card-footer>
                <button @click="addToCart(product)">Agregar al Carrito</button> 
        </template>
    </base-card> 
</carrousel-view>
</template> 