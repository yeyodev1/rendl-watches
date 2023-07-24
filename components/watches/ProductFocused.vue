<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

import CrushButton from "@nabux-crush/crush-button";

import useWatchStore from "@/store/WatchStore";

const imageSelected = ref("");
const watchStore = useWatchStore();

const props = defineProps({
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  oldPrice: {
    type: String,
    required: false,
  },
  slug: {
    type: String,
    required: true,
  },
});

onMounted(() => {
  if (watchStore.watch && watchStore.watch.content.image.length > 0) {
    imageSelected.value = watchStore.watch.content.image[0].filename;
  }
});

function getImage(imageFilename: string) {
  imageSelected.value = imageFilename;
}

function redirectToWs() {
  if (watchStore.watch !== null) {
    window.open(
      `https://api.whatsapp.com/send?phone=593981163033&text=%F0%9F%98%80%20Hola!%20vengo%20de%20su%20web%20y%20quisiera%20saber%20m%C3%A1s%20sobre%20+${watchStore.watch.content.name}`
    );
  }
}
</script>

<template>
  <div class="card">
    <div class="container">
      <img class="container-image" :src="imageSelected" alt="" />
      <div class="container-section">
        <div v-if="watchStore.watch">
          <div class="container-section-images">
            <button
              v-for="(image, index) in watchStore.watch.content.image"
              :key="index"
              @click="getImage(image.filename)"
            >
              <img class="image" :src="image.filename" alt="" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="card-details">
      <p class="card-details-name">{{ name }}</p>
      <p class="card-details-price">
        <span class="card-details-price-offer" v-if="oldPrice">
          Oferta
        </span>
        ${{ price }}
        <span class="card-details-price-last" v-if="oldPrice">
        ${{ oldPrice }}
        </span>
      </p>
      <CrushButton
        class="card-details-button"
        variant="primary"
        text="Comprar"
        :disabled="watchStore.watch === null"
        @click="redirectToWs"
      />
      <div class="card-details2">
        <p class="card-details2-title">CARACTERÍSTICAS</p>
        <DetailProduct
          v-if="watchStore.watch"
          :brand="watchStore.watch.content.brand"
          :type="watchStore.watch.content.type"
          :material="watchStore.watch.content.material"
          :code="watchStore.watch.content.casioCode"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  width: 100%;
  max-width: 300px;
  display: flex;
  gap: 40px;
  flex-direction: column;
  @media (min-width: $tablet-upper-breakpoint) {
    flex-direction: row;
  }
  .container {
    &-image {
      height: 400px;
      width: 280px;
      object-fit: cover;
      object-position: top center;
    }
    &-section {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-direction: column;
      &-images {
        width: 100%;
        display: flex;
        max-width: 500px;
        .image {
          width: 100%;
        }
        button {
          background: none;
          border: none;
          cursor: pointer;
        }
      }
    }
  }
  &-details {
    display: flex;
    flex-direction: column;
    justify-content: left;
    gap: 40px;
    &-name {
      font-size: $h2-font-size;
      color: $black;
      font-weight: 700;
      text-transform: capitalize;
    }
    &-price {
      align-items: center;
      display: flex;
      flex-direction: row;
      gap: 4px;
      font-size: $body-font-size;
      font-weight: 700;
      color: $black;
      &-offer {
        background-color: $red;
        color: $white;
        padding: 4px 8px;
        border-radius: 4px;
      }
      &-last {
        color: $gray;
        text-decoration: line-through;
      }
    }
    &-button {
      width: 100%;
      max-width: 208px;
      margin: 0 auto;
      background-color: $black;
      color: $white;
      border: none;
      &:hover {
        background-color: $gray;
        border: none;
      }
    }
    &2 {
      &-title {
        font-size: $body-font-size;
        font-weight: 700;
      }
    }
  }
}
</style>
