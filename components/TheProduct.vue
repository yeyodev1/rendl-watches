<script setup lang="ts"></script>

<template>
  <div class="card">
    <img  
      class="card-image"
      src="https://i.pinimg.com/564x/38/40/f1/3840f1da0f70a97b2db4d6642f21a36a.jpg" 
      alt="reloj negro fossil">
    <div class="card-details">
      <p class="card-details-name">
        Reloj fossil negro 45mm
      </p>
      <p class="card-details-price">
        $100
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card {
  &-image {
    height: 304px;
    width: 280px;
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