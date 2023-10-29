let vm = Vue.createApp({

  //template: `{{ message }}`
  // beforeCreate() {
  //   console.log('beforeCreate() functuon is called', this.message)
  // },
  // created() {
  //   console.log('create() function is called', this.message)
  // },
  // beforeMount() {
  //   console.log('beforeMount() function is called', this.$el)
  // },
  // mounted() {
  //   console.log('mounted() function is called', this.$el)
  // },
  // beforeUpdate() {
  //   console.log('beforeUpdate() function called')
  // },
  // updated() {
  //   console.log('updated() function is called', this.message)
  // },
  // beforeUnmount() {
  //   console.log('beforeUnmount() function is called')
  // },
  // unmounted() {
  //   console.log('unmounted() function is called')
  // }
})

vm.component('hello', {
  template: `<h1> {{ message }} </h1>`,
  data() {
    return {
      message: 'Hello World'
    }
  }
})

vm.mount('#app')
/*
setTimeout(() => {
  vm.mount('#app')
}, 3000)
*/

// let vm2 = Vue.createApp({
//   data() {
//     return {
//       message: "Hello World"
//     }
//   },
//   render() {
//     return Vue.h(
//       'h1',
//       this.message
//     )
//   }
// }).mount('#app2')