<script setup>
const links = ['tiendas', 'blog', 'contacto']
</script>
<template>
<nav class="w-full bg-slate-200 flex justify-center mt-6 p-4">
    <router-link to="/" class="ml-10">
        <img src="../assets/logo.svg" alt="logo" width="50">
    </router-link>
    <ul class="w-full flex justify-end text-center">
        <li class="item" v-for="link in links" :key="link"><a href="#">{{link}}</a></li>
        <li class="item"><a class="item-link" href="#" title="Crea tu cuenta / Inicia sesion">
            <font-awesome-icon icon="user-circle" size="xl"/>    
        </a></li> 
        <li class="item"><a class="item-link relative" href="#" title="Tu Carrito de compras">
            <font-awesome-icon icon="cart-shopping" size="xl"/>
            <div class="rounded-full bg-red-500 w-6 text-center  absolute top-2 left-5">
                <span class="circle__content">0</span>
            </div>    
        </a></li>
    </ul>
</nav>
</template>
<style>
.item{
    @apply w-20 uppercase font-bold
}

</style>