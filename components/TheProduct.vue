<script setup lang="ts">

const props = defineProps({
  aditionalImage: {
    type: String,
    required: false,
  },
  aditionalImage2: {
    type: String,
    required: false,
  },
  aditionalImage3: {
    type: String,
    required: false,
  },
  image: {
    type: String, 
    required: true,
  },
  product: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  oldPrice: {
    type: String,
    required: false,
  },
  slug: {
    type: String, 
    required: true
  }
})

const route = useRoute();
const isWatchRoute = computed(() => {
  return route.path === '/watches/watch/*'
})
</script>

<template>
  <NuxtLink 
    class="link"
    :to="`watches/${slug}`">
    <div class="card">
      <img
        class="card-image" 
        :src="image" 
        alt="">
      <div 
        v-if="isWatchRoute"
        class="card-container-images">
        <img
          class="card-container-images-2"
          :src="aditionalImage"
          alt="">
        <img 
          class="card-container-images-3"
          :src="aditionalImage2"
          alt="">
        <img 
          class="card-container-images-4"
          :src="aditionalImage3"
          alt="">
      </div>
      <div class="card-details">
        <p class="card-details-name">
          {{product}}
        </p>
        <p class="card-details-price">
          <span class="card-details-price-offer" v-if="oldPrice">
            Oferta
          </span>
          ${{price}}
          <span class="card-details-price-last" v-if="oldPrice">
            ${{oldPrice}}
          </span>
        </p>
      </div>
    </div>
  </NuxtLink>
</template>

<style lang="scss" scoped>

.link {
  text-decoration: none;
}
.card {
  width: 100%;
  max-width: 208px;
  &-image {
    height: 304px;
    width: 100%;
    object-fit: cover;
    object-position: top center;
  }
  &-container-images {
    display: flex;
    gap: 5%;
    &-2, &-3, &-4 {
      width: 30%;
      height: 88px;
    }
  }
  &-details {
    display: flex;
    flex-direction: column;
    gap: 4px;
    &-name {
      font-size: $body-font-size;
      color: $black;
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
  }
}
</style>