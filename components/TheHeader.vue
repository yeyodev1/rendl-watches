<template>
  <header class="header">
    <NuxtLink to="/">
      <img 
        class="header-logo"
        src="@/assets/images/logo.png" 
        alt="rendl importadora" />
    </NuxtLink>
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
  &-options {
    display: flex;
    gap: 12px;
    padding: 12px;
    * {
      text-decoration: none;
      color: $black;
      font-weight: 700;
    }
  }
}
</style>