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
      <div class="hero-container">
        <p class="hero-container-text">Para el y ella</p>
        <p class="hero-container-description">Encuentra los mejores relojes para ti en este lugar, esto es rendlt</p>   
      </div>
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
  &-container {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    &-text {
      color: $white;
      font-size: 3 * $body-font-size;
      @media(min-width: $tablet-upper-breakpoint) {
        font-size: 4 * $body-font-size;
      }
      font-weight: 700;
      text-align: center;
    }
    &-description {
      color: $white;
      font-size: $h2-font-size;
      text-align: center;
    }
  }
}
</style>