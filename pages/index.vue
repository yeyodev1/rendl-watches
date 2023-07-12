<script setup lang="ts">
import TheHero from '@/components/TheHero.vue';
import ProductSection from '@/components/home/ProductSection.vue';
import TheCta from '@/components/home/TheCta.vue';
import ProductsInOfferSection from '@/components/home/ProductsInOfferSection.vue';
</script>

<template>
  <TheHero :image="'../assets/images/heroImage.png'"/>
  <ProductSection />
  <TheCta />
  <ProductsInOfferSection />
</template>
