<template>
  <!-- From Uiverse.io by csozidev -->
  <div class="loader flex flex-col items-center">
    <IconFlower2 class="logo -mb-2.5" height="200px" />
    <slot>
      <p class="text-2xl font-medium font-serif">Loading ....</p>
    </slot>
  </div>
</template>

<style scoped>
.loader {
  overflow: visible;
  display: flex;
}

.logo {
  fill: none;
  stroke-dasharray: 200px;
  /*<-- Play with this number until it look cool */
  stroke: currentColor !important;
  animation: load linear 5s infinite;
  stroke-width: 10px;
}

@keyframes load {
  0% {
    stroke-dasharray: 0px;
  }

  100% {
    stroke-dasharray: 2200px;
    /* <-- This number should always be 10 times the number up there*/
  }
}
</style>
