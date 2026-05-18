<script setup lang="ts">
import Sidebar from './components/Sidebar.vue';


</script>

<template>
  <div class="flex w-screen min-h-screen p-2 flex-row bg-zinc-100">
    <!-- sidebar -->
    <nav class="flex flex-col bg-indigo-400 wrap flex-1 border max-w-1/8 mr-1 rounded-sm">
      <Sidebar/>
    </nav>
    
    <!-- contenido -->
    <main class="flex flex-col wrap bg-red-300 flex-1 border w-3/4 rounded-sm">
       <RouterView/>
    </main>
  </div>
</template>

<style scoped>
</style>
