<template>
    <div>
        The user is {{ age }} years old
    </div>
    <button type="button" @click="onClickAge" >Update age Event</button> <!-- when the button is clicked, the onClickAge method is called -->
    <br>
    <button type="button" @click="ageChangeFn(3)" >Update age CB</button>
</template>

<script>
export default {
    name: "User",
    props: {
        age: {
            type: Number,
            //required: true,
            //default: 18
            validator(value) {
                //this.onClickAge() vue instance isn't created we get error
                return value < 130 // The condition will check if value is less than 130. If it is then the value 
                                //will be passed and retuened true
            }
        },
        ageChangeFn: Function
    },
    emits: ['ageChange'],
    methods: {
        onClickAge() { //when the button is clicked, the ageChange event is emitted
            this.$emit('ageChange', 1) //emits an event called ageChange
        }
    },
    
}
</script>

<style lang="scss" scoped>
</style>