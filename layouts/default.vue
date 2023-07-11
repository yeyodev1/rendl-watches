<template>
  <div class="app-container">
    <TheHeader />
    <div class="app-container-view">
      <slot  />
    </div>
    <TheFooter  />
  </div>
</template>

<style lang="scss">
.app-container {
  background-color: $white;
	min-height: 100vh;
	width: 100%;
	display: flex;
	flex-direction: column;
	&-view{
		flex: 1;
	}
}
</style>
