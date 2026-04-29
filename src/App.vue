<script setup lang="ts">
// importamos ref que nos permitira crear variables reactivas
import { ref } from 'vue';

// tipo personalizado para los dias hábiles de la semana
type DiaLaboral = 'Lunes' | 'Martes' | 'Miércoles' | 'Jueves' | 'Viernes';

// creamos una lista de DiaLaboral
const dias: DiaLaboral[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];

// creamos una variable reactiva que contendra el día seleccionado cuando toquemos el boton del día
// aseguramos que esta variable solo reciba elementos del tipo DiaLaboral (por ejemplo: ref<DiaLaboral>('Lunes'))
const diaSeleccionado = ref<DiaLaboral>('Lunes')

</script>

<template>
  <!-- html va aca -->
</template>

<style scoped>
/* estilos van aca */
</style>
