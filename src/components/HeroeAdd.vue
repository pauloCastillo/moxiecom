<script setup>
import BaseCard from './ui/BaseCard.vue'
import CarrouselView from './ui/CarrouselView.vue';
import promo1 from '../assets/img/promo1.png'
import promo2 from '../assets/img/promo2.png'
import promo3 from '../assets/img/promo3.png'
import promo4 from '../assets/img/promo4.png'
import promo5 from '../assets/img/promo5.png'
import promo6 from '../assets/img/promo6.png'

const imagenes = [promo1, promo2, promo3, promo4, promo5, promo6]

</script>

<template>
    <div class="heroe">
        <carrousel-view :slides-counter="imagenes.length">
            <base-card class="card" v-for="(img, index) of imagenes" :key="index">
                <template #card-header>
                    <img :src="img" alt="nombrePromo" class="w-full"/>
                </template>
            </base-card>
        </carrousel-view>
    </div>
</template>
<style>
.heroe{
    overflow: hidden;
    position: relative;
    width: 100%;
}
.arrows{
   color: #5ddffd;
   opacity: 0.8;
}

.arrows:hover{
    color: #ffcdff;
    cursor: pointer;
    opacity: 1;
}

.card{
    padding: 0.5rem;
}
</style>