<template>
  <p v-if="age >= 21"> {{  msg }}</p>
  <p v-else> You must be 21 years older or more to view this message</p>
</template>


<script>
export default {
  name: 'HelloWorld',
  props: ["age"],
  data() {
    return {
      msg: "Hello World"
    }
  }
}
</script>

<style scoped lang="scss">
p:hover {
  color: darken(#9d9d6e, 10%);
}
</style>