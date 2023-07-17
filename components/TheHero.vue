<script setup lang="ts">
const props = defineProps({
  image: {
    type: String, 
    requiered: true,
  },
  description: {
    type: String,
    required: false,
  }
})
</script>

<template>
  <div class="hero">
      <img class="hero-image" :src="image" alt="Encuentra tu reloj aquí">
      <p class="hero-text">{{ description }}</p>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  max-width: $desktop-upper-breakpoint;
  width: 100%;
  height: 40vh;
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 auto;
  &-image {
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: block;
    object-fit: cover;
    object-position: center;
    filter: brightness(0.5);
  }
  &-text {
    color: $white;
    font-size: 4 * $body-font-size;
    font-weight: 700;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    margin-left: 20px;
  }
}
</style>