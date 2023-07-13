<script setup lang="ts">
const products = [
  {
    product: 'Reloj ultraviolento',
    price: '50',
    oldPrice: '1000',
    image: 'https://i.pinimg.com/564x/38/40/f1/3840f1da0f70a97b2db4d6642f21a36a.jpg'
  },
  {
    product: 'Reloj ultraviolento',
    price: '50',
    image: 'https://i.pinimg.com/564x/38/40/f1/3840f1da0f70a97b2db4d6642f21a36a.jpg'
  },
  {
    product: 'Reloj ultraviolento',
    price: '50',
    oldPrice: '400',
    image: 'https://i.pinimg.com/564x/38/40/f1/3840f1da0f70a97b2db4d6642f21a36a.jpg'
  },
]
</script>

<template>
  <div class="section">
    <p class="section-title">Estos relojes te pueden interesar</p> 
    <div class="section-container">
      <TheProduct
        v-for="(product, index) in products"
        :key="index"
        :image="product.image"
        :product="product.product" 
        :price="product.price"
        :oldPrice="product.oldPrice"/>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.section {
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  gap: 40px;
  &-title {
    text-align: center;
    font-size: $h2-font-size;
    font-weight: 700;
  }
  &-container {
    justify-content: center;
    align-items: center;
    gap: 40px;
    display: flex;
    flex-wrap: wrap;
  }
}
</style>