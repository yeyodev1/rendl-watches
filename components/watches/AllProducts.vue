<script setup lang="ts">
import { onMounted } from 'vue';
import useWatchStore from '@/store/WatchStore';
import TheProduct from '@/components/TheProduct.vue';

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
    <div class="product-section">
      <TheProduct
        v-for="(product, index) in products"
        :key="index"
        :aditionalImage="products?.aditionalImage"
        :aditionalImage2="products?.aditionalImage2"
        :aditionalImage3="products?.aditionalImage3"
        :image="product.image"
        :product="product.name" 
        :oldPrice="product.oldPrice"
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
  }
}
</style>