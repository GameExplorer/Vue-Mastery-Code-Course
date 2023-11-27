<template>
  <div>
    <p>{{  num  }}</p>
    <p>{{  double }}</p>
    <button type="button" @click.prevent="increment">Click me</button>
    <p>{{  user.name }}</p>
    <p>
      <input type="text" v-model="phrase" />
    </p>
    <p>
      {{ reversedPhrase }}
    </p>

    <AppAlert :user="user"></AppAlert>

    <button type="button" ref="btn">Button</button>
  </div>
</template>

<script>
import { ref, reactive, onBeforeMount, onMounted } from "vue";
import AppAlert from "@/components/Alert.vue";
import { useNumber } from "@/hooks/number"
import { usePhrase } from "@/hooks/phrase"

export default {
  name: "App",
  components: {
    AppAlert,
  },
  setup() {
    const btn = ref(null);

    onBeforeMount(() => {
      console.log("onBeforeMount");
    });
    onMounted(() => {
      console.log("onMounted");

      btn.value.addEventListener('click', () => {
        console.log('button was clicked');
      });
    });
    
    const user = reactive({
      name: "Mike",
      age: 21,
    });

    setTimeout(() => {
      user.name = "Bob";
    }, 4000);

    const { num, increment, double } = useNumber();
    const { phrase, reversedPhrase } = usePhrase();
    
    return {
      num,
      increment,
      user,
      phrase,
      reversedPhrase,
      double,
      btn,
    }
  },
};
</script>
