<template>
  <div class="about">
    <h1>{{  $route.params.member }}</h1>
    <p> {{  store.counter }}</p>
    <p> {{ store.doubleCount }}</p>
    <button type="button" @click.prevent="store.increment">Click me</button>
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
import { useCounterStore } from '@/stores/counter'

export default {
  setup() {
    const route = useRoute();  //this.$route
    const router = useRouter(); //this.$router
    const store = useCounterStore(); //this.$store

    console.log(route.params.member); // admin

    router.push({
      hash: '#test',
    });

    return { store };
  },
}
</script>