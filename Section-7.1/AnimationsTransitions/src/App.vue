<script >
export default {
  name: 'App',
  data() {
    return {
      flag: false,
      numbers: [1,2,3,4,5],
    }
  },
  methods: {
    beforeEnter(el) {
      console.log('before-Enter event fired', el);
    },
    enter(el) {
      console.log('enter event fired', el)

      // const animation = el.animate([{ transform: "scale3d(0,0,0)"}, {}], {duration: 1000,}); //has two arguments first is keyframes and second is options

      // animation.onfinish = () => {
      //   done(); // done is a callback function must call it
      // };

    },
    afterEnter(el) {
      console.log('after-Enter event fired', el);
    },
    beforeLeave(el) {
      console.log('before-Leave event fired', el);
    },
    leave(el) {
      console.log('leave-event fired', el)

      // const animation = el.animate([{}, { transform: "scale3d(0,0,0)"}], {duration: 1000,}); //has two arguments first is keyframes and second is options

      // animation.onfinish = () => {
      //   done(); // done is a callback function must call it
      // };
    },
    afterLeave(el) {
      console.log('after-Leave event fired', el);
    },
    addItem() {
      const num = Math.floor(Math.random() * 100) + 1;
      const index = Math.floor(Math.random() * this.numbers.length);
      this.numbers.splice(index, 0, num);
    },
    removeItem(index) {
      this.numbers.splice(index, 1);
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

  <!-- <transition
    @before-enter="beforeEnter"
    @enter="enter"
    @after-enter="afterEnter"
    @before-leave="beforeLeave"
    @leave="leave"
    @after-leave="afterLeave"
    :css="true"
    name="fade">--><!-- if we set css to true then it will use css animation and if we set it to false then it will use js animation -->
    <!--<h2 v-if="flag">JS Animation</h2>
  </transition> -->

  <button @click="addItem">Add</button>
  <ul>
    <transition-group name="fade"
      enter-active-class="animate__animated animate__lightSpeedInRight"
      leave-active-class="animate__animated animate__lightSpeedOutLeft">
    <li v-for="(number, index) in numbers" :key="number"
      @click="removeItem(index)">
      {{  number }}
    </li>
    </transition-group>
  </ul>
</template>

<style>
.animate__bounceUp {
  position: absolute;
}

.animate__animated {
  animation-duration: 0.5s;
}

li {
  font-size: 2em;
  cursor: pointer;  
}
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

/* For smoother animation of the list*/
.fade-move {
  transition: all 0.5s linear;
}

.fade-leave-active {
  position: absolute;
}
/* ------------------------------- */

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
