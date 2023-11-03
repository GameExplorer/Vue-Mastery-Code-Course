<script >
export default {
  name: 'App',
  data() {
    return {
      flag: false,
    }
  }
}
</script>

<template>
  <button type="button" @click="flag = !flag">Toggle</button>

  <Transition name="fade">
    <h2 v-if="flag">Hello Vue!</h2>
</Transition>
</template>

<style >
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: all 0.25s linear;
}

.fade-leave-to {
  transition: all 0.25s linear;
  opacity: 0;
}
</style>
