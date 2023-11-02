<template>
    <div>
        The user is {{ age }} years old
    </div>
    <button type="button" @click="onClickAge">Update age</button>" <!-- when the button is clicked, the onClickAge method is called -->

</template>

<script>
export default {
    name: "User",
    props: ["age"],
    emits: ['ageChange'],
    methods: {
        onClickAge() { //when the button is clicked, the ageChange event is emitted
            this.$emit('ageChange', 1) //emits an event called ageChange
        }
    }
}
</script>

<style lang="scss" scoped>

</style>