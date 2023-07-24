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
      <NuxtLink to="/">Inicio</NuxtLink>
      <div class="header-watches">Relojes <i class="fa-solid fa-chevron-down" /> 
        <div class="header-watches-content">
          <NuxtLink to="/watches/men">Relojes de hombre</NuxtLink>
          <NuxtLink to="/watches/woman">Relojes de mujer</NuxtLink>
          <NuxtLink to="/watches/">Todos los relojes</NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  padding: 0 24px;
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

    @media (min-width: $tablet-upper-breakpoint) {
      display: none;
    }
  }

  &-options {
    display: none;
    position: relative;
    @media (min-width: $tablet-upper-breakpoint) {
      display: flex;
      gap: 12px;
      padding: 12px;
    }

    * {
      text-decoration: none;
      color: $black;
    }
  }

  .header-watches-content {
    display: none;
    position: absolute;
    background-color: white;
    padding: 12px;
    z-index: 10;
    border-radius: 8px;
  }

  .header-watches:hover .header-watches-content {
    width: 150%;
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 16px;
    right: 0;
  }
}
</style>
