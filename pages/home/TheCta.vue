<script setup lang="ts">
import CrushButton from '@nabux-crush/crush-button';
</script>

<template>
  <div class="section">
    <div class="section-option option1">
      <p>Mujer</p>
    </div>
    <div class="section-calltoaction">
      <img src="@/assets/images/logo.png" alt="rendl importadora">
      <CrushButton
      class="section-calltoaction-button"
      variant="primary"
      text="Ver relojes"/>
    </div>
    <div class="section-option option2"> 
      <p>Hombre</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.section {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media(min-width: $desktop-lower-breakpoint) {
    flex-direction: row;
  }
  .option1 {
    width: 100%;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url('https://i.pinimg.com/564x/d6/2e/66/d62e6680d3476c234986d19b786296c0.jpg'), lightgray 50% / cover no-repeat;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    object-position: top center;
    p {
      text-align: center;
      font-weight: 700;
      color: $white;
      font-size: $h2-font-size;
    }
  }
  &-option {
    padding: 80px 120px;
  }
  .option2 {
    width: 100%;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url('https://i.pinimg.com/564x/0e/d3/65/0ed365cbfd4470da2c91134169515230.jpg'), lightgray 50% / cover no-repeat;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    object-position: top center;
    p {
      text-align: center;
      font-weight: 700;
      color: $white;
      font-size: $h2-font-size;
    }
  }
  &-calltoaction {
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 80px;
    @media(min-width: $tablet-lower-breakpoint) {
      padding: 80px 120px;
    }
    &-button {
      background-color: $black;
      color: $white;
      border: none;
    }
  }
}
</style>