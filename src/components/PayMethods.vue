<script setup>
const options = ['visaCard', 'masterCard', 'Paypal', 'transferencia bancaria', 'QR']
</script>

<template>
    <div class="pay-methods">
        <h3 class="font-bold text-2xl">M&eacute;todos de Pago</h3>
        <ul class="payoption w-80 m-auto md:flex"> iconos de los metodos de pago
            <li class="options m-auto w-20" v-for="(option, index) in options" :key="index"><img :src="option" alt="index"></li>
        </ul>
        <p class="mt-4">Tambi&eacute;n te ofrecemos <strong>pago contra entrega</strong> en efectivo</p>
    </div>
</template>