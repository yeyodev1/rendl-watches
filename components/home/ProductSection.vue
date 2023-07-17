<script setup lang="ts">
import { onMounted } from 'vue';
import useWatchStore from '@/store/WatchStore';
import TheProduct from '@/components/TheProduct.vue';

const watchStore = useWatchStore();


onMounted(async() => {
  await watchStore.getWatches('men');
})
</script>

<template>
  <div class="product">
    <p class="product-section-title">Nuevos en la colección</p>
    <div class="product-section">
      <TheProduct
        v-for="(product, index) in watchStore.manWatches"
        :key="index"
        :image="product.content.image[0].filename"
        :product="product.content.name" 
        :price="product.content.price"/>
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