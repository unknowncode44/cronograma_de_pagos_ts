<script setup lang="ts">
import { ref } from 'vue';

type DiaLaboral = 'Lunes' | 'Martes' | 'Miércoles' | 'Jueves' | 'Viernes';

const emit = defineEmits<{
  (e: 'seleccionarNuevoDia', dia: DiaLaboral): void
}>();

// creamos una lista de DiaLaboral
const dias: DiaLaboral[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];

// diaSeleccionado es una variable reactiva! la traemos tambien!
// creamos una variable reactiva que contendra el día seleccionado cuando toquemos el boton del día
// aseguramos que esta variable solo reciba elementos del tipo DiaLaboral (por ejemplo: ref<DiaLaboral>('Lunes'))
const diaSeleccionado = ref<DiaLaboral>("Lunes");

const seleccionarDia = (dia: DiaLaboral): void => {
  diaSeleccionado.value = dia // IMPORTANTE: para acceder o cambiar el valor de la variable reactiva debemos usar .value

  // queremos usar el emit que creamos mas arriba para avisar al padre!
  emit('seleccionarNuevoDia',dia)

  // ahora como hacemos que padre escuche este cambio?
}

// volvimos a como estaba antes! Ahora funciona pero aun no le avisa nada al padre!

// bien en el padre ya no funciona la funcionalidad de cambiar dias! vamos a hacer que el hijo le diga que dia esta seleccionado!

// genial ahora el padre cambia su dia de acuerdo al dia que elije el hijo! pero ya no puede cambiar el dia el padre. 

// Listo es hora de borrar el fragmento de codigo del padre!

</script>

<template>
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
</template>

<style scoped></style>