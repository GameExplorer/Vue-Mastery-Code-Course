<script>
import Forms from "./components/Forms.vue";
export default {
  name: "App",
  components: {
    Forms,
  },

  data() {
    return {
      help: "This is some help text",
    }
  }
}
</script>

<template>
  <Forms>
    <template v-slot:help>
      <p>{{  help }}</p>
    </template>
    <template v-slot:fields>
      <input type="text" placeholder="email" />
      <input type="text" placeholder="username" />
      <input type="password" placeholder="password" />
    </template>
    <template v-slot:buttons>
      <button type="submit">Submit</button>
    </template>
    <p>Random text</p>
  </Forms>
  <Forms>
    <template  v-slot:help>
      <p>Contact help</p>
    </template>
    <template v-slot:fields>
      <input type="text" placeholder="name" />
      <input type="text" placeholder="message" />
    </template>
    <template v-slot:buttons>
      <button type="submit">Submit</button>
    </template>
  </Forms>
</template>


