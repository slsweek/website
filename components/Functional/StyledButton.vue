<template functional>
  <button class="button" :style="{ ...props.styles }">{{ props.text }}</button>
</template>

<style>
.button {
  background-color: rgba(204, 165, 30);
  border: none;
  border-radius: 8px;
  font-family: Heebo;
  font-size: 20px;
  text-transform: uppercase;
  color: white;
  padding: 10px 15px;
}
</style>
