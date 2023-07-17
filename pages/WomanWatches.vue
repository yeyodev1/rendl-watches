<script setup lang="ts">
import TheHero from '@/components/TheHero.vue';
import WomanProducts from '@/components/watches/WomanProducts.vue'
import heroImage from '@/assets/images/heroWoman.png';
</script>

<template>
  <TheHero  
    :image="heroImage" 
    description="Relojes de mujer"/>
  <WomanProducts />
</template>

<style lang="scss" scoped></style>