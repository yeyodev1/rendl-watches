<script setup lang="ts">
import CrushButton from '@nabux-crush/crush-button';
import useMenuStore from '@/store/MenuStore';

const buttons = [
  {
    name: 'Todos los relojes',
    link: '/watches',
  },
  {
    name: 'Hombre',
    link: '/menwatches',
  },
  {
    name: 'Mujer',
    link: '/womanwatches',
  },
]

const menuStore = useMenuStore();

function toggleMenu() {
  menuStore.toggleMenu();
}
</script>

<template>
  <div 
    class="menu"
    :class="{'is-open' : menuStore.isOpen}">
    <div class="menu-close">
      <button class="menu-close-button" :class="{'is-closed' : !menuStore.isOpen}" @click="toggleMenu">
        <i class="fa-sharp fa-solid fa-xmark" />
      </button>
    </div>
    <div class="menu-details">
      <router-link 
        :to="button.link" 
        v-for="(button, index) in buttons" 
        :key="index"
        class="menu-details-link"
        @click="toggleMenu">
        <CrushButton 
          class="menu-details-link-button" 
          variant="secondary" 
          :text="button.name" />
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.menu {
  padding: 20px;
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  transition-property: all;
  transition-duration: 300ms;
  z-index: 30;
  right: 100%;
  background-color: $white;
  &-close {
    display: flex;
    justify-content: end;
    &-button {
      background: transparent;
      padding: 16px;
      border: none;
      color: $black;
      font-size: $h2-font-size;
    }
  }
  &-details {
    display: flex;
    flex-direction: column;
    justify-content: start;
    gap: 12px;
    &-link {
      &-button {
        color: $black ;
        width: 100%;
        text-align: left;
        border: none;
        border-bottom: 1px solid $black;
        &:hover {
          border: none
        }
      }
    }
  }
}
.is-open {
  right: 0;
}
</style>