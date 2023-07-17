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
    <div class="product-section">
      <TheProduct
        v-for="(product, index) in watchStore.manWatches"
        :key="index"
        :image="product.content.image[0].filename"
        :product="product.content.name" 
        :price="product.content.price"
        :oldPrice="product.content?.old_price"
        :slug="product.full_slug"/>
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