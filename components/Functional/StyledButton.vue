<template functional>
  <button
    class="button"
    :style="{ ...props.styles }" @click="props.clickFn">{{ props.text }}</button>
</template>

<style lang="scss" scoped>
.button {
  background-color: #f9ca24;
  border: none;
  border-radius: 8px;
  font-family: Heebo;
  font-size: 20px;
  font-weight: 300;
  text-transform: uppercase;
  color: white;
  padding: 10px 15px;
  cursor: pointer;
  transition: all 300ms ease-in-out;

  &:hover {
    color: #f9ca24;
    background-color: white;
  }
}
</style>
