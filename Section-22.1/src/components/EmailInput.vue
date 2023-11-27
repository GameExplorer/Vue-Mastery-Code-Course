<template>
  <input
    type="email"
    class="form-control"
    placeholder="E-mail"
    :value="email"
    @input="update($event)"
    :class="{
      'is-valid': validateEamil(email),
      'is-invalid': !validateEamil(email),
    }"
  />
</template>

<script>
import validateEamil from "../validate-email";
export default {
  name: "EmailInput",
  props: ["email"],
  methods: {
    update() {
      this.$emit("update:email", $event.target.value);
      },
    validateEamil,
  },
};
</script>
