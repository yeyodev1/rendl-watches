<script setup lang="ts">
import useMenuStore from '@/store/MenuStore';

const menuStore = useMenuStore();

function toggleMenu() {
  menuStore.toggleMenu();
}
</script>

<template>
  <header class="header">
    <NuxtLink to="/">
      <img 
        class="header-logo"
        src="@/assets/images/logo.png" 
        alt="rendl importadora" />
    </NuxtLink>
      <button 
        class="header-menu"
        @click="toggleMenu">
        <i class="fa-solid fa-bars" />
      </button>
      <div class="header-options">
        <NuxtLink to="/menwatches">Hombre</NuxtLink>
        <NuxtLink to="/womanwatches">Mujer</NuxtLink>
      </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  max-width: $desktop-upper-breakpoint;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &-logo {
    height: 64px;
    padding: 12px;
  }
  &-menu {
    padding: 12px;
    background: none;
    border: none;
    text-decoration: none;
    @media(min-width: $tablet-upper-breakpoint) {
      display: none;
    }
  }
  &-options {
    display: none;
    @media(min-width: $tablet-upper-breakpoint) {
      display: flex;
      gap: 12px;
      padding: 12px;
    }
    * {
      text-decoration: none;
      color: $black;
      font-weight: 700;
    }
  }
}
</style>