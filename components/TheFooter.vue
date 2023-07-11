<script setup lang="ts">
const networks = [
  {
    link: '/',
    icon: 'fa-brands fa-facebook'
  },
  {
    link: '/',
    icon: 'fa-brands fa-instagram'
  },
  {
    link: '/',
    icon: 'fa-brands fa-whatsapp'
  },
]
</script>

<template>
  <footer class="footer">
    <img 
      class="footer-image"
      src="@/assets/images/logo.png" 
      alt="rendl">
    <div class="footer-options">
      <a href="/">Hombre</a>
      <a href="/">Mujer</a>
    </div>
    <div class="footer-social">
      <a
        v-for="(net, index) in networks"
        :key="index"
        :href="net.link">
        <i :class="net.icon"/>
      </a>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  max-width: $desktop-upper-breakpoint;
  padding: 12px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 48px 24px;
  @media(min-width: $tablet-lower-breakpoint) {
    justify-content: space-around;
  }
  &-image{
    height: 64px;
  }
  &-options {
    display: flex;
    gap: 12px;
    padding: 12px;
    justify-content: center;
    align-items: center;
    a {
      text-decoration: none;
      color: $black;
    }
  }
  &-social {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
    a i {
      color: $black;
      font-size: 24px;
    }
  }
}
</style>