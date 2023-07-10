<template>
  <header class="header">
    <img 
      class="header-logo"
      src="@/assets/images/logo.png" 
      alt="rendl importadora">
      <div class="header-options">
        <a href="/">Hombre</a>
        <a href="/">Mujer</a>
      </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
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
    a {
      text-decoration: none;
      color: $black;
    }
  }
}
</style>