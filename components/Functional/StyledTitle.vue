<template functional>
  <h1 :style="props.styles || {}" class="title">
    <slot />
  </h1>
</template>

<style lang="scss" scoped>
.title {
  font-family: Bangers;
  font-size: 3.5rem;
  color: rgb(204, 165, 30);
}
</style>
