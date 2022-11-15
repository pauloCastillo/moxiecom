<script setup>
import PayMethods from '../PayMethods.vue';
</script>
<template>
<footer class="w-full bg-blue-300">
    <div class="jobs">
        En esta parte habra, vende tus productos con nosotros<br>
        En esta parte habra, crea contenido asombroso y monetiza tus videos con nosotros<br>
        como merqueo
    </div>
    <div class="w-full bg-blue-500 h-32 grid grid-cols-2 items-center">
        <img src="@/assets/logotipo_sinFondo.png" alt="logotipo" class="w-48 ml-5">
        <div class="social-media flex">
            <p>encuentranos en: </p>
            <font-awesome-icon :icon="['fab', 'facebook']" size="2x" /> 
            <font-awesome-icon :icon="['fab', 'instagram']" size="2x" />
            <font-awesome-icon :icon="['fab', 'whatsapp']" size="2x" />
        </div>
    </div>
    <div class="w-full grid">
        <div class="help">
            <h3 class="font-bold text-2xl">¿Necesitas Ayuda?</h3>
            Ambos tienen pinta de boton<br>
            <a href="tel:+59173590713" title="Comunicate con Moxie">ll&aacute;manos</a>
            <div class="moxie-modal">
                <p>mapa de cobertura</p>
            </div>
        </div>
        <div class="legal">
            <h3 class="font-bold text-2xl">Legal</h3>
            <a href="#">Terminos y Condiciones</a>
        </div>
        <PayMethods />
    </div>
</footer>
</template>