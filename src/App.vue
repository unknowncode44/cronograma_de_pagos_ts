<script setup lang="ts">
// importamos ref que nos permitira crear variables reactivas
import { computed, ref } from 'vue';
import Componente1 from './components/Componente1.vue';

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

</script>

<template>

  <div class="min-h-screen bg-slate-50 p-8 flex flex-col items-center">
    <h1 class="text-3xl font-extrabold text-slate-800 mb-8">Gestor de Pagos</h1>
    <!-- Listo mi componente1 ya esta funcionand! -->
    <Componente1 @seleccionar-nuevo-dia="seleccionarDia"/>

    <!-- este bloque de codigo es el componente 2 -->
    <div class="w-full max-w-md bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mt-6">
      <label class="block text-sm font-semibold text-slate-700 mb-2">Ingrese su DNI</label>
      
      <!-- usamos v-model -->
      <input v-model="dniInput" type="text" placeholder="Ej: 40123456" maxlength="8"
        class="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all" />
    </div>

    <!-- voy crear una carpeta de components para ponerlos ahi, luego crear cada uno de ellos -->
     <!-- recuerden que cada nuevo componente en .vue debe tener la extension .vue en el nombre del archivo, aca lo vemos -->
      

    <div v-if="dniInput" class="mt-6">
      <p v-if="correspondeCobro" class="text-green-600 font-bold text-lg">¡Hoy te corresponde el pago!</p>
      <p v-else class="text-red-500">Hoy no es tu turno de cobro.</p>
    </div>

  </div>
</template>

<style scoped>
/* estilos van aca */
</style>
