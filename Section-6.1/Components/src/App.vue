<template>
  <h2>This is random text</h2>
  <HelloWorld :age="age"/> <!-- passes the age data to the HelloWorld component -->
  <User :age="age" @ageChange="updateAge" :ageChangeFn="updateAgeCB"/> <!-- when the ageChange event is emitted, the updateAge method is called -->
</template>


<script>
import HelloWorld from '@/components/HelloWorld.vue'
import User from '@/components/User.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    User
  },

  data() {
    return {
      age: 18,
    }
  },

  methods: {
    updateAge(num) { //when the ageChange event is emitted, this method is called
      this.age += num //updates the age
    },
    updateAgeCB(num) {
      this.age += num
    }
  }
}
</script>



<style>

</style>
