<script setup lang="ts">
import { onMounted } from 'vue';
import useWatchStore from '@/store/WatchStore';
import TheProduct from '@/components/TheProduct.vue';
import { Watch } from '@/enum/Watch';

const props = defineProps({
  title: {
    type: String,
    required: true,
  }
})

const watchStore = useWatchStore();
onMounted(async() => {
  await watchStore.getWatches(Watch.MEN);
  await watchStore.getWatches(Watch.WOMEN);
})
</script>

<template>
  <div class="product">
    <p class="product-title">{{title}}</p>
    <div class="product-section">
      <TheProduct
        v-for="(product, index) in watchStore.allWatches"
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
  &-title {
    text-align: center;
    font-weight: 700;
    font-size: $h2-font-size;
  }
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