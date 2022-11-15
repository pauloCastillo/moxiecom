<script setup>
import { ref, onMounted } from 'vue'
const props = defineProps(['slidesCounter'])
let moveIt = 0
const animate = ref({
    transform: `translateX(${moveIt}px)`
})

function moveForward(){
    for(let i = 1; i < props.slidesCounter; i++){
        moveIt = i * 275;
        animate.value.transform=`translateX(-${moveIt}px)`
    }   
    return animate
};

function moveBackward(){
    for(let i = props.slidesCounter; i >= 0; i--){
        moveIt = i * 100;
        animate.value.transform=`translateX(-${moveIt}px)`
    }
    return animate
};

</script>

<template>
    <div class="carrousel">
        <div class="inner-slider duration-200" :style="animate"> 
            <slot></slot>
        </div>
    </div>
    <div class="w-full flex justify-between items-center mb-5">
        <font-awesome-icon icon="arrow-circle-left" size="2x" class="arrows" @click="moveBackward"/>
        <font-awesome-icon icon="arrow-circle-right" size="2x" class="arrows" @click="moveForward"/>
    </div>
</template>

<style>
.carrousel{
    overflow: hidden;
    padding: 0.5rem;
    position: relative;
    width: 100%;
}

.inner-slider{  
    display: flex;
    justify-content: space-around;
    width: 210%;
}
</style>