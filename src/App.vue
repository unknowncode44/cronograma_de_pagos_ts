<script setup lang="ts">
// importamos ref que nos permitira crear variables reactivas
import { computed, ref } from 'vue';
import ListOfDays from './components/ListOfDays.vue';
import DNIInput from './components/DNIInput.vue';

// tipo personalizado para los dias hábiles de la semana
type DiaLaboral = 'Lunes' | 'Martes' | 'Miércoles' | 'Jueves' | 'Viernes';

// creamos una lista de DiaLaboral
const dias: DiaLaboral[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];

// creamos una variable reactiva que contendra el día seleccionado cuando toquemos el boton del día
// aseguramos que esta variable solo reciba elementos del tipo DiaLaboral (por ejemplo: ref<DiaLaboral>('Lunes'))
const diaSeleccionado = ref<DiaLaboral>('Lunes');

// creamos una variable para asignar al input
const dniInput = ref<string>('')

// Lógica de negocio: Mapeo de terminación de DNI por día
const cronograma: Record<DiaLaboral, string[]> = {
  'Lunes': ['0', '1'],
  'Martes': ['2', '3'],
  'Miércoles': ['4', '5'],
  'Jueves': ['6', '7'],
  'Viernes': ['8', '9']
}

// Propiedad computada para verificar si le toca cobrar
const correspondeCobro = computed(() => {
  if (dniInput.value.length === 0) return null

  const ultimoDigito = dniInput.value.slice(-1)
  const digitosDelDia = cronograma[diaSeleccionado.value]

  return digitosDelDia.includes(ultimoDigito)
})

// funcion seleccionar día nos ayuda a cambiar la variable reactiva dependiendo la interaccion del usuario
const seleccionarDia = (dia: DiaLaboral): void => {
  diaSeleccionado.value = dia // IMPORTANTE: para acceder o cambiar el valor de la variable reactiva debemos usar .value
  
}
const  actualizarInput = (dni: string): void => {
  dniInput.value = dni
}


</script>

<template>

  <div class="min-h-screen bg-slate-50 p-8 flex flex-col items-center">
    <h1 class="text-3xl font-extrabold text-slate-800 mb-8">Gestor de Pagos</h1>

    <!-- importamos el componente ListOfDays.vue -->
    <ListOfDays @nuevo-dia-seleccionado="seleccionarDia"/>

    <!-- importamos el componente DNIInput -->
    <DNIInput @cambio-deinput="actualizarInput"/>

    <div v-if="dniInput" class="mt-6">
      <p v-if="correspondeCobro" class="text-green-600 font-bold text-lg">¡Hoy te corresponde el pago!</p>
      <p v-else class="text-red-500">Hoy no es tu turno de cobro.</p>
    </div>

  </div>
</template>

<style scoped>
/* estilos van aca */
</style>
