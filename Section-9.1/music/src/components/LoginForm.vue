<template>
  <div class="text-white text-center font-bold p-4 mb-4" v-if="login_show_alert"
    :class="login_alert_variant">
    {{ login_alert_msg }}
  </div>
  <!-- Login Form -->
  <Vee-Form :validation-schema="loginSchema" @sumbit="login">
    <!-- Email -->
    <div class="mb-3">
      <label class="inline-block mb-2">Email</label>
      <Vee-Fields
        type="email"
        name="email"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Enter Email"
      />
      <ErrorMessage class="text-red-600" name="email" />
      <!-- error message -->
    </div>
    <!-- Password -->
    <div class="mb-3">
      <label class="inline-block mb-2">Password</label>
      <Vee-Fields
        type="password"
        name="password"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Password"
      />
      <ErrorMessage class="text-red-600" name="password" />
      <!-- error message -->
    </div>
    <button
      type="submit" :disabled="login_in_submission"
      class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"
    >
      Submit
    </button>
  </Vee-Form>
</template>

<script>
import { mapActions } from 'pinia';
import useUserStore from "@/stores/user";

export default {
  name: "LoginForm",
  data() {
    return {
      loginSchema: {
        email: 'required|email',
        password: 'required|min:8|max:25'
      },
      login_in_submission: false,
      login_show_alert: false,
      login_alert_variant: 'bg-blue-500',
      login_alert_msg: 'Please wait! Please wait we are login you in...',
    }
  },
  methods: {
    ...mapActions(useUserStore, ['authenticate']),
    async login(values) {
      this.login_in_submission = true;
      this.login_show_alert = true;
      this.login_alert_variant = 'bg-blue-500';
      this.login_alert_msg = 'Please wait! Please wait we are login you in...';

      try {
        await this.authenticate(values);
      } catch (error) {
        this.login_in_submission = false;
        this.login_alert_variant = 'bg-red-500';
        this.login_alert_msg = 'Invalid login details! Please try again.';
        return;
      }

      /* Login Succesfull */
      this.login_alert_variant = 'bg-green-500';
      this.login_alert_msg = 'Login Successfull!';
      window.location.reload();
    }
  }
}
</script>
