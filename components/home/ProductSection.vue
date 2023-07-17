<script setup lang="ts">
import { onMounted } from 'vue';
import useWatchStore from '@/store/WatchStore';

const watchStore = useWatchStore();
const products = [
  {
    name: 'Reloj ultraviolento',
    price: '50',
    image: 'https://i.pinimg.com/564x/38/40/f1/3840f1da0f70a97b2db4d6642f21a36a.jpg'
  },
  {
    name: 'Reloj ultraviolento',
    price: '50',
    image: 'https://i.pinimg.com/564x/38/40/f1/3840f1da0f70a97b2db4d6642f21a36a.jpg'
  },
  {
    name: 'Reloj ultraviolento',
    price: '50',
    image: 'https://i.pinimg.com/564x/38/40/f1/3840f1da0f70a97b2db4d6642f21a36a.jpg'
  },
  {
    name: 'Reloj ultraviolento',
    price: '50',
    image: 'https://i.pinimg.com/564x/38/40/f1/3840f1da0f70a97b2db4d6642f21a36a.jpg'
  },
]

onMounted(async() => {
  await watchStore.getWatches();
})
</script>

<template>
  <div class="product">
    <p class="product-section-title">Nuevos en la colección</p>
    <div class="product-section">
      <TheProduct
        v-for="(product, index) in products"
        :key="index"
        :image="product.image"
        :product="product.name" 
        :price="product.price"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product {
  padding: 40px;
  gap: 40px;
  display: flex;
  flex-direction: column;
  &-section {
    margin: 0 auto;
    max-width: $desktop-upper-breakpoint;
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    justify-content: center;
    align-items: center;
    &-title {
    text-align: center;
    font-weight: 700;
    font-size: $h2-font-size;
    }
  }
}
</style>