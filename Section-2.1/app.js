const vm = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            middleName: '',
            lastName: 'Doe',
            url: 'https://github.com/GameExplorer',
            raw_url: '<p><a href="https://github.com/GameExplorer" target="_blank">Link</a></p>',
            age: 20,
        }
    },
    methods: {
        increment() {
            this.age++;
        },

        updateLastName(msg, event) {
            //event.preventDefault(); // prevents the default behavior of the event

            //console.log(msg)
            this.lastName = event.target.value;
        },

        updateMiddleName(event) {
            this.middleName = event.target.value;
        }
    },
    computed: {
        fullName() {
            console.log("Full name computed property was called")
            return `${this.firstName} ${this.middleName} ${this.lastName.toUpperCase()}`;
        },
    },
    watch: {
        age(newVal, oldVal) {
            setTimeout(() => {
                this.age = 20;
            }, 3000);
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