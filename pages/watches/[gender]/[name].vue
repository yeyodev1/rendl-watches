<script setup lang="ts">
import TheProduct from '@/components/TheProduct.vue';
import CrushButton from '@nabux-crush/crush-button';
import InterestedProducts from '@/components/watches/InterestedProducts.vue';

const details = [
  {
    detail: 'Cuero de ternera recien nacida'
  },
  {
    detail: 'Cuero de ternera recien nacida'
  },
  {
    detail: 'Cuero de ternera recien nacida'
  },
  {
    detail: 'Cuero de ternera recien nacida'
  },
]
</script>

<template>
  <div class="card">
    <div class="card-section">
      <TheProduct
        aditionalImage="https://i.pinimg.com/236x/d4/e1/bd/d4e1bd8dd7c802aabc4fdca47961525a.jpg"
        aditionalImage2="https://i.pinimg.com/236x/d4/e1/bd/d4e1bd8dd7c802aabc4fdca47961525a.jpg"
        aditionalImage3="https://i.pinimg.com/236x/d4/e1/bd/d4e1bd8dd7c802aabc4fdca47961525a.jpg"
        image="https://i.pinimg.com/236x/d4/e1/bd/d4e1bd8dd7c802aabc4fdca47961525a.jpg"
        product="reloj de la muerte" 
        price="500"
        oldPrice="1000" />  
      <CrushButton 
        class="card-section-button"
        variant="primary"
        text="Contactanos"/>
    </div>
    <div class="card-section2">
      <p class="card-section2-title">
        CARACTERÍSTICAS
      </p>
      <li
        class="card-section2-detail"
        v-for="(detail, index) in details"
        :key="index"      
        >
        {{ detail.detail }}
      </li>
    </div>
  </div>
  <InterestedProducts />
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
    &-detail {
      color: $gray;
      margin-top: 8px;
    }
  }
}
</style>