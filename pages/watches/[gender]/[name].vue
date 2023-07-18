<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'nuxt/app';
import CrushButton from '@nabux-crush/crush-button';

import AllProducts from '@/components/watches/AllProducts.vue';
import DetailProduct from '@/components/DetailProduct.vue';
import TheProduct from '@/components/TheProduct.vue';
import useWatchStore from '@/store/WatchStore';
import { Watch } from '@/enum/Watch';

const route = useRoute();
const watchStore = useWatchStore();
const imageSelected = ref('');

function getImage(image: string) {
  imageSelected.value = image;
}

async function getProduct() {
  const gender = route.params.gender;
  const name = route.params.name;
  const slug = `${gender}/${name}`
  await watchStore.getWatchBySlug(slug);
}

onMounted(async () => {
  await watchStore.getWatches(Watch.WOMEN);
  await getProduct();
  if (watchStore.watch !== null) {
    imageSelected.value = watchStore.watch.content.image[0].filename;
  }
});

</script>

<template>
  <div class="card">
    <div class="card-section">
      <TheProduct
        v-if="watchStore.watch !== null"
        :image="imageSelected"
        :product="watchStore.watch.content.name" 
        :price="watchStore.watch.content.price"
        :oldPrice="watchStore.watch.content?.old_price"
        :slug="watchStore.watch.full_slug"/>
      <div 
        v-if="watchStore.watch !== null"
        class="card-section-images">
        <button
          v-for="(image, index) in watchStore.watch.content.image"
          :key="index"
          @click="getImage(image.filename)">
          <img
            class="image"
            :src="image.filename"
            alt="">
        </button>
      </div>
      <CrushButton 
        class="card-section-button"
        variant="primary"
        text="Contactanos"/>
    </div>
    <div class="card-section2">
      <p class="card-section2-title">
        CARACTERÍSTICAS
      </p>
      <DetailProduct 
        v-if="watchStore.watch !== null"
        :brand="watchStore.watch.content.brand"
        :type="watchStore.watch.content.type"
        :material="watchStore.watch.content.material"
        :code="watchStore.watch.content.casioCode"
      />
    </div>
  </div>
  <AllProducts title="Estos relojes te pueden interesar"/>
</template>

<style lang="scss" scoped>
.card {
  padding: 40px;
  width: 100%;
  display: flex;
  gap: 40px;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  &-section {
    display: flex;
    justify-content: center;
    gap: 40px;
    align-items: center;
    flex-direction: column;
    &-images {
      width: 100%;
      display: flex;
      max-width: 500px;
      .image {
        width: 120px;
      }
      button {
        background: none;
        border: none;
        cursor: pointer;
      }
    }
    &-button {
      width: 100%;
      max-width: 208px;
      background-color: $black;
      color: $white;
      border: none;
      &:hover {
        background-color: $gray;
        border: none;
      }
    }
  }
  &-section2 {
    &-title {
      font-weight: 700;
      font-size: $body-font-size;
    }
  }
}
</style>