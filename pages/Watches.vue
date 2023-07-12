<script setup lang="ts">
import TheHero from '@/components/TheHero.vue';
</script>

<template>
  <div class="container">
    <TheHero image="https://i.pinimg.com/564x/53/bd/f0/53bdf0f70c7253ef9fc60319750de117.jpg" description="Todos los relojes"/>
  </div>
</template>

<style lang="scss" scoped>
.container{
  position: relative;
  display: flex;
  align-items: center;
}
</style>