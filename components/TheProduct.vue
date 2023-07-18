<script setup lang="ts">
import { useRoute } from 'nuxt/app';

const props = defineProps({
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
const isWatchRouteDetail = computed(() => {
  return route.path === `/watches/${props.slug}`;
});
const routeDirection = computed(() => {
  return isWatchRouteDetail.value ? '' : `/watches/${props.slug}`; 
});
</script>

<template>
  <NuxtLink 
    class="link"
    :to="routeDirection">
    <div class="card">
      <img
        class="card-image" 
        :src="image" 
        alt="">
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