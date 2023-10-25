const vm = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe',
        }
    }
}).mount('#app') // mount() is a method that mounts the app to the DOM

// setTimeout() is a built-in JS function that takes a callback function and a time in milliseconds
// it will change the firstName after 3 seconds (John -> Bob )
setTimeout(() => {
    vm.firstName = 'Bob'
}, 3000);

/*Vue.createApp({ 
    data() {
        return {
            firstName: 'Jane',
            lastName: 'Doe',
        }
    }
}).mount('#app2')*/