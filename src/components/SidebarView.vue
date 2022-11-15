<script setup>
import {useCategoryStore} from "@/stores/CategoryStore"
import { onMounted, computed } from "vue";
const storeCategories = useCategoryStore()
onMounted(async()=>{
    await storeCategories.getAllCategories()
}) 

const categories = computed(()=> storeCategories.allCategories())
console.log(categories)
</script>

<template>
    <aside>
        <div class="w-full flex justify-between items-center">
            <h3 class="uppercase font-bold">pasillos</h3>
            <font-awesome-icon icon="arrow-circle-up" />
            <font-awesome-icon icon="arrow-circle-down" />
        </div>
        <div class="bodySidebar">
            <ul>
                <li v-for="category in storeCategories.categories" :key="category">{{category}}</li>
            </ul>
        </div>
    </aside>
</template>