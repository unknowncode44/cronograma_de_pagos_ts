<script setup lang="ts">
// 1️⃣ Definimos qué propiedades recibirá el componente usando una interface
interface Props {
    dniInput: string,
    correspondeCobro: boolean | null,
}

// 2️⃣ Llamamos a defineProps iniciandolo como una variable
const props = defineProps<Props>()

</script>

<template>
    <!-- 3️⃣ Indicamos en qué parte del template se deben usar las props -->
    <div v-if="dniInput" class="mt-6">
        <p v-if="correspondeCobro" class="text-green-600 font-bold text-lg">¡Hoy te corresponde el pago!</p>
        <p v-else class="text-red-500">Hoy no es tu turno de cobro.</p>
    </div>  
</template>

<style scoped></style>