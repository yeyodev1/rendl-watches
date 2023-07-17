<script setup lang="ts">
import { onMounted } from 'vue';
import useWatchStore from '@/store/WatchStore';
import TheProduct from '@/components/TheProduct.vue';
import { Watch } from '@/enum/Watch';

const watchStore = useWatchStore();
onMounted(async() => {
  await watchStore.getWatches(Watch.MEN);
  await watchStore.getWatches(Watch.WOMEN);
})
</script>

<template>
  <div class="section">
    <p class="section-title">
      Relojes en oferta
    </p>
    <div class="section-products">
      <TheProduct
        v-for="(product, index) in watchStore.offerWatches"
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