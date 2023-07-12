<script setup lang="ts">
const props = defineProps({
  image: {
    type: String, 
    requiered: true,
  }
})
</script>

<template>
  <div class="hero">
      <img class="hero-image" :src="image" alt="Encuentra tu reloj aquí">
  </div>
</template>

<style lang="scss" scoped>
.hero {
  width: 100%;
  height: 40vh;
  &-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>