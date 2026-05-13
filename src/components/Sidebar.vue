<script setup lang="ts">
import { ref } from 'vue'
// Se asume el uso de lucide-vue-next para iconos, pero puedes usar cualquier librería
import { 
  Home, 
  Users2,
  ChevronLeft, 
  LogOut 
} from 'lucide-vue-next'

interface MenuItem {
  title: string
  icon: any
  route: string
}

const isCollapsed = ref()

const menuItems: MenuItem[] = [
  { title: 'Home', icon: Home, route: '/' },
  { title: 'Usuarios', icon: Users2, route: 'users' },
]


</script>

<template>
    <div class="flex-1 px-3 py-4 space-y-2 overflow-y-auto">
        <RouterLink 
        v-for="item in menuItems" 
        :key="item.title"
        :to="item.route"
        class="flex items-center gap-3 p-3 rounded-xl transition-all duration-200 hover:bg-indigo-600 hover:text-white group"
      >
        <component :is="item.icon" class="w-6 h-6 shrink-0" />
        <span 
          v-if="!isCollapsed" 
          class="font-medium whitespace-nowrap transition-opacity duration-200"
        >
          {{ item.title }}
        </span>
        
        <!-- Tooltip para modo colapsado -->
        <div 
          v-if="isCollapsed"
          class="fixed left-20 ml-2 px-2 py-1 bg-indigo-600 text-white text-sm rounded opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity"
        >
          {{ item.title }}
        </div>
    </RouterLink>
    </div>
</template>

<style scoped>

</style>