<script >
export default {
  name: 'App',
  data() {
    return {
      flag: false,
    }
  },
  methods: {
    beforeEnter(el) {
      console.log('before-Enter event fired', el);
    },
    enter(el, done) {
      console.log('enter event fired', el)

      const animation = el.animate([{ transform: "scale3d(0,0,0)"}, {}], {duration: 1000,}); //has two arguments first is keyframes and second is options

      animation.onfinish = () => {
        done(); // done is a callback function must call it
      };

    },
    afterEnter(el) {
      console.log('after-Enter event fired', el);
    },
    beforeLeave(el) {
      console.log('before-Leave event fired', el);
    },
    leave(el, done) {
      console.log('leave-event fired', el)

      const animation = el.animate([{}, { transform: "scale3d(0,0,0)"}], {duration: 1000,}); //has two arguments first is keyframes and second is options

      animation.onfinish = () => {
        done(); // done is a callback function must call it
      };
    },
    afterLeave(el) {
      console.log('after-Leave event fired', el);
    }
  }
}
</script>

<template>
  <button type="button" @click="flag = !flag">Toggle</button>

  <!-- Transitions 
  <Transition name="fade" mode="out-in">
    <h2 v-if="flag" key="main">Hello Vue!</h2>
    <h2 v-else key="secondary"> Another Vue!</h2>
  </Transition>
  -->

  <!-- <Transition name="zoom" type="animation" appear>
    <h2 v-if="flag">CSS Animation</h2>
  </Transition> -->

  <transition
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
    :css="false"> <!-- if we set css to true then it will use css animation and if we set it to false then it will use js animation -->
    <h2 v-if="flag">JS Animation</h2>
  </transition>
</template>

<style>
h2 {
  width: 400px;
  padding: 2em;
  margin: 2em;
}

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

.zoom-enter-active {
  animation: zoom-in 1s linear forwards;
  transition: all 1s linear;
}

.zoom-leave-active {
  animation: zoom-out 1s linear forwards;
  transition: all 1s linear;
}

.zoom-enter-from {
  opacity: 0;
}

.zoom-leave-to {
  opacity: 0;
}

@keyframes zoom-in {
  from {
    transform: scale(0,0);
  }
  to {
    transform: scale(1,1);
  }
}

@keyframes zoom-out {
  from {
    transform: scale(1,1);
  }
  to {
    transform: scale(0,0);
  }
}
</style>
