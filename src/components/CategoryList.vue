<script setup>

</script>

<template>
<ul class="items">
    <li class="item" v-for="category in categories" :key="category">
        <a href="#" class="item__link">{{ category.title }}</a>
    </li>
</ul>
</template>