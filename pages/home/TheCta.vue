<script setup lang="ts"></script>

<template>
  <div class="section">
    <div class="section-option">
      <p>Mujer</p>
    </div>
    <div>
      <img src="@/assets/images/logo.png" alt="">
    </div>
    <div class="section-option">
      <p>Hombre</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  &-option {
    padding: 80px 120px;
  }
}
</style>