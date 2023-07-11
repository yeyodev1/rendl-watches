<script setup lang="ts">
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
    required: true,
  },
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
        <span class="card-details-price-offer">
          Oferta
        </span>
        ${{price}}
        <span class="card-details-price-last">
          ${{oldPrice}}
        </span>
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