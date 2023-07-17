<script setup lang="ts">
import TheHero from '@/components/TheHero.vue';
import TheCta from '@/components/home/TheCta.vue';
import ProductsInOfferSection from '@/components/home/ProductsInOfferSection.vue';
import HeroImage from '@/assets/images/heroImage.png'
import AllProducts from '@/components/watches/AllProducts.vue';
</script>

<template>
  <TheHero :image="HeroImage"/>
  <AllProducts title="Nuevos en la colección"/>
  <TheCta />
  <ProductsInOfferSection />
</template>
