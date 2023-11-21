<template>
  <div>
    <slot :user="user" :favorites="favorites"></slot>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      user: {
        name: "John",
        age: 25,
      },
      favorites: ["Pizza", "Marbles", "Birds"],
    };
  },
}
</script>
