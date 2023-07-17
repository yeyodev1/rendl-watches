<script setup lang="ts">
import TheHero from '@/components/TheHero.vue';
import ProductSection from '@/components/home/ProductSection.vue';
import TheCta from '@/components/home/TheCta.vue';
import ProductsInOfferSection from '@/components/home/ProductsInOfferSection.vue';
import HeroImage from '@/assets/images/heroImage.png'
</script>

<template>
  <TheHero :image="HeroImage"/>
  <ProductSection />
  <TheCta />
  <ProductsInOfferSection />
</template>
