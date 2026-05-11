<script setup lang="ts">
import { ref } from 'vue';

const emit = defineEmits<{
    (e: "nuevoDiaSeleccionado", dia: DiaLaboral) : void
}>();

type DiaLaboral = 'Lunes' | 'Martes' | 'Miércoles' | 'Jueves' | 'Viernes';

const dias: DiaLaboral[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];

const diaSeleccionado = ref<DiaLaboral>('Lunes');

const seleccionarDia = (dia: DiaLaboral): void => {
  diaSeleccionado.value = dia
  emit('nuevoDiaSeleccionado', dia);
}

</script>

<template>
    <!-- bloque de codigo que renderiza la lista de dias -->
    <div class="flex gap-2">
        <button v-for="dia in dias" :key="dia" :class="[
            'px-6 py-2 font-medium rounded-full transition-all duration-200',
            diaSeleccionado === dia
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200'
                : 'bg-white text-indigo-600 border border-indigo-200 hover:bg-indigo-50'
        ]" @click="seleccionarDia(dia)">
            {{ dia }}
        </button>
    </div>
</template>

<style></style>