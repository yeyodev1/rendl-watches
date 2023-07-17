<script setup lang="ts">
import TheHero from '@/components/TheHero.vue';
import MenProducts from '@/components/watches/MenProducts.vue';
import heroImage from '@/assets/images/heroMen.png';
</script>

<template>
  <TheHero 
    :image="heroImage" 
    description="Relojes para hombre" />
  <MenProducts />
</template>

<script lang="scss" scoped ></script>