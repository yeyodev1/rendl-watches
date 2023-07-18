<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'nuxt/app';
import useWatchStore from '@/store/WatchStore';
import TheProduct from '@/components/TheProduct.vue';
import { Watch } from '@/enum/Watch';

const route = useRoute();

const watchStore = useWatchStore();

const gender = computed(() => {
  return route.path.includes(Watch.MEN)
    ? Watch.MEN
    : Watch.WOMEN
});
const watches = computed(() => {
  return route.path.includes(`/${Watch.MEN}`)
    ? watchStore.manWatches
    : watchStore.womanWatches
});

onMounted(async() => {
  await watchStore.getWatches(gender.value);
})


</script>

<template>
  <div class="product">
    <div class="product-section">
      <TheProduct
        v-for="(product, index) in watches"
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