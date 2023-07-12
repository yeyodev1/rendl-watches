<script setup lang="ts">
import TheProduct from '@/components/TheProduct.vue';
const products = [
  {
    image: 'https://i.pinimg.com/236x/51/e4/e5/51e4e57298fb43f902f5c564b5b14646.jpg',
    name: 'Relok de la muerte',
    price: '100',
    oldPrice: '500',
  },
  {
    image: 'https://i.pinimg.com/236x/51/e4/e5/51e4e57298fb43f902f5c564b5b14646.jpg',
    name: 'Relok de la muerte',
    price: '100',
    oldPrice: '500',
  },
  {
    image: 'https://i.pinimg.com/236x/51/e4/e5/51e4e57298fb43f902f5c564b5b14646.jpg',
    name: 'Relok de la muerte',
    price: '100',
    oldPrice: '500',
  },
  {
    image: 'https://i.pinimg.com/236x/51/e4/e5/51e4e57298fb43f902f5c564b5b14646.jpg',
    name: 'Relok de la muerte',
    price: '100',
    oldPrice: '500',
  },
]
</script>

<template>
  <div class="section">
    <p class="section-title">
      Relojes en oferta
    </p>
    <div class="section-products">
      <TheProduct 
        v-for="(product, index) in products"
        :key="index"
        :image="product.image"
        :product="product.name"
        :price="product.price" 
        :oldPrice="product.oldPrice" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.section {
  padding: 40px;
  gap: 40px;
  display: flex;
  flex-direction: column;
  &-title {
    text-align: center;
    font-weight: 700;
    font-size: $h2-font-size;
  }
  &-products {
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
    justify-content: center;
  }
}
</style>