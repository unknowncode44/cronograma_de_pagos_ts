<script setup lang="ts">
import { ref } from 'vue';

const emit =  defineEmits<{
    (e: 'cambioDeinput', dni: string) : void
}>();

const dniInput = ref<string>('')

const cambiosDetectados = () => {
    emit('cambioDeinput', dniInput.value)
}

</script>

<template>
    <div class="w-full max-w-md bg-white p-6 rounded-2xl shadow-sm border border-slate-200 mt-6">
        <label class="block text-sm font-semibold text-slate-700 mb-2">Ingrese su DNI</label>
        <input @change="cambiosDetectados" v-model="dniInput" type="text" placeholder="Ej: 40123456" maxlength="8"
            class="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all" />
    </div>
</template>

<style scoped></style>