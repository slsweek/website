<template functional>
  <h1 :style="props.styles || {}" class="title">
    <slot />
  </h1>
</template>

<style lang="scss" scoped>
.title {
  text-align: center;
  font-family: Bangers;
  font-size: 3.5rem;
  color: #f9ca24;
}
</style>
