<script setup lang="ts">
import CrushButton from '@nabux-crush/crush-button';
</script>

<template>
  <div class="section">
    <NuxtLink class="section-option option1" to="/watches/women">
      <p class="option1-option">Mujer</p>
    </NuxtLink>
    <div class="section-calltoaction">
      <img src="@/assets/images/logo.png" alt="rendl importadora">
      <NuxtLink to="/watches">
        <CrushButton
        class="section-calltoaction-button"
        variant="primary"
        text="Ver relojes"/>
      </NuxtLink>
    </div>
    <NuxtLink class="section-option option2" to="/watches/men"> 
      <p class="option2-option" >hombre</p>
    </NuxtLink>
  </div>
</template>

<style lang="scss" scoped>
.section {
  max-width: $desktop-upper-breakpoint;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media(min-width: $desktop-lower-breakpoint) {
    flex-direction: row;
  }
  margin: 0 auto;
  .option1 {
    width: 100%;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url('https://i.pinimg.com/564x/0e/d3/65/0ed365cbfd4470da2c91134169515230.jpg'), lightgray 50% / cover no-repeat;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    object-position: top center;
    display: flex;
    justify-content: center;
    align-items: center;
    * {
      font-weight: 700;
      color: $white;
      font-size: $h2-font-size;
    }
  }
  &-option {
    padding: 80px 120px;
    text-decoration: none;
  }
  .option2 {
    width: 100%;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), url('https://i.pinimg.com/564x/d6/2e/66/d62e6680d3476c234986d19b786296c0.jpg'), lightgray 50% / cover no-repeat;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    object-position: top center;
    display: flex;
    justify-content: center;
    align-items: center;
    * {
      text-align: center;
      font-weight: 700;
      color: $white;
      font-size: $h2-font-size;
    }
    &-option {
      text-decoration: none;
    }
  }
  &-calltoaction {
    display: flex;
    flex-direction: column;
    gap: 40px;
    padding: 20px;
    @media(min-width: $desktop-lower-breakpoint) {
      padding: 0px 120px;
    }
    &-button {
      background-color: $black;
      color: $white;
      border: none;
      &:hover{
        background-color: $gray;
        border: none;
      }
    }
  }
}
</style>