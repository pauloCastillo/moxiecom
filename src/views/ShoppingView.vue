<script setup>
import SidebarView from '@/components/SidebarView.vue'
import ProductsCards from '@/components/ProductsCards.vue'
</script>

<template>
    <section class="flex mb-2">
        <aside class="bg-slate-200 w-80 h-80 p-2 mr-2 sticky top-0">
            <SidebarView />
        </aside>
        <section class="w-full overflow-hidden">
            <div class="products-section">
                <div class="products__header">
                    <h3 class="uppercase font-bold">Nombre de la Categoria</h3>
                </div>  
                <ProductsCards />
            </div>
            <div class="products-section">
                <div class="products__header">
                    <h3 class="uppercase font-bold">Nombre de la Categoria</h3>
                </div>  
                <ProductsCards />
            </div>
            <div class="products-section">
                <div class="products__header">
                    <h3 class="uppercase font-bold">Nombre de la Categoria</h3>
                </div>  
                <ProductsCards />
            </div>
        </section>
    </section>
</template>