<script setup lang="ts">
const props = defineProps({
  brand: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  material: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    required: true,
  }
})
</script>

<template>
  <li
    class="detail"
  >
    {{ brand }}
  </li>
  <li class="detail">
    {{ type }}
  </li>
  <li class="detail">
    {{ material }} 
  </li>
  <li class="detail">
    {{ code }} 
  </li>
</template>
  
<style lang="scss" scoped>
  .detail {
      color: $gray;
      margin-top: 8px;
    }
</style>