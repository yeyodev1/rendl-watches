<script setup lang="ts">
function getYear(): number {
  const date = new Date();
  const currentYear = date.getFullYear();
  return currentYear;
}
</script>

<template>
  <div class="yeyodev">
      <div class="yeyodev-details">
        <p>Copyright</p>
        <i class="fa-regular fa-copyright" />
        <p class="yeyodev-details-author">
          <a href="https://www.yeyo.dev/" target="_blank">YeyoDev {{ getYear() }}</a> - Todos los derechos reservados
        </p>
      </div>
    </div>
</template>

<style lang="scss" scoped>
.yeyodev {
  padding-bottom: 32px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &-details {
    color: $black;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 8px;
    p {
      font-size: 1rem;
      a {
        font-size: 1rem;
        color: $black;
        text-decoration: none;
      }
    }
    }
  }
</style>