<template functional>
  <button class="button" :style="{ ...props.styles }">{{ props.text }}</button>
</template>

<style lang="scss" scoped>
.button {
  background-color: rgb(204, 165, 30);
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
    color: rgb(204, 165, 30);
    background-color: white;
  }
}
</style>
