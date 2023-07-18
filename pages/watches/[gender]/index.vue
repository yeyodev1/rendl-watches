<script setup lang="ts">
import TheHero from '@/components/TheHero.vue';
import GenderProducts from '@/components/watches/GenderProducts.vue';
import menImage from '@/assets/images/heroMen.png';
import womenImage from '@/assets/images/heroWoman.png';
import { Watch } from '@/enum/Watch';

const route = useRoute();

const menDescription = 'Relojes para hombre';
const womenDescription = 'Relojes para mujer';
const heroImage = computed(() => route.path.includes(`/${Watch.MEN}`) ? menImage : womenImage);
const description = computed(() => route.path.includes(`/${Watch.MEN}`) ? menDescription : womenDescription);
</script>

<template>
  <TheHero 
    :image="heroImage" 
    :description="description" />
  <GenderProducts />
</template>

<script lang="scss" scoped ></script>