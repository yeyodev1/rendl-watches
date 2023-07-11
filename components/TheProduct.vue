<script setup lang="ts">
const props = defineProps({
  product: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  image: {
    type: String, 
    required: true,
  }
})
</script>

<template>
  <div class="card">
    <img  
      class="card-image"
      :src="image" 
      alt="reloj negro fossil">
    <div class="card-details">
      <p class="card-details-name">
        {{product}}
      </p>
      <p class="card-details-price">
        ${{price}}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
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
    }
    &-price {
      font-size: $body-font-size;
      font-weight: 700;
      color: $red;
    }
  }
}
</style>