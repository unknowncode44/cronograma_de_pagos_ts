<script setup lang="ts">
// importamos ref que nos permitira crear variables reactivas
import { ref } from 'vue';

// tipo personalizado para los dias hábiles de la semana
type DiaLaboral = 'Lunes' | 'Martes' | 'Miércoles' | 'Jueves' | 'Viernes';

// creamos una lista de DiaLaboral
const dias: DiaLaboral[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];

// creamos una variable reactiva que contendra el día seleccionado cuando toquemos el boton del día
// aseguramos que esta variable solo reciba elementos del tipo DiaLaboral (por ejemplo: ref<DiaLaboral>('Lunes'))
const diaSeleccionado = ref<DiaLaboral>('Lunes');

// funcion seleccionar día nos ayuda a cambiar la variable reactiva dependiendo la interaccion del usuario
const seleccionarDia = (dia: DiaLaboral): void => {
  diaSeleccionado.value = dia // IMPORTANTE: para acceder o cambiar el valor de la variable reactiva debemos usar .value
}

</script>

<template>

  <div class="min-h-screen bg-slate-50 p-8 flex flex-col items-center">
    <h1 class="text-3xl font-extrabold text-slate-800 mb-8">Gestor de Pagos</h1>
    <div class="flex gap-2">

      <!-- usamos directiva v-for para iterar en nuestra lista de dias-->
      <button v-for="dia in dias" :key="dia" :class="[
        'px-6 py-2 font-medium rounded-full transition-all duration-200',
        diaSeleccionado === dia
          ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-200'
          : 'bg-white text-indigo-600 border border-indigo-200 hover:bg-indigo-50'
      ]" @click="seleccionarDia(dia)">
        {{ dia }}
      </button>
    </div>
  </div>
</template>

<style scoped>
/* estilos van aca */
</style>
