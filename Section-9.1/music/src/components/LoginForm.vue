<template>
  <div>
    <div
      class="text-white text-center font-bold p-4 mb-4"
      v-if="login_show_alert"
      :class="login_alert_variant"
    >
      {{ login_alert_msg }}
    </div>

    <form @submit.prevent="login">
      <!-- Email -->
      <div class="mb-3">
        <label class="inline-block mb-2">Email</label>
        <vee-field
          name="email"
          type="email"
          :rules="loginSchema.email"
          class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
          placeholder="Enter Email"
          v-model="email"
        />
        <ErrorMessage class="text-red-600" name="email" />
      </div>

      <!-- Password -->
      <div class="mb-3">
        <label class="inline-block mb-2">Password</label>
        <vee-field
          name="password"
          type="password"
          :rules="loginSchema.password"
          class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
          placeholder="Password"
          v-model="password"
        />
        <ErrorMessage class="text-red-600" name="password" />
      </div>

      <button
        type="submit"
        class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"
        :disabled="login_in_submission"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      email: "",
      password: "",
      loginSchema: {
        email: "required|email",
        password: "required|min:9|max:100",
      },
      login_in_submission: false,
      login_show_alert: false,
      login_alert_variant: "bg-blue-500",
      login_alert_msg: "Please wait! We are logging you in.",
    };
  },
  methods: {
    login() {
      this.login_show_alert = true;
      this.login_in_submission = true;
      this.login_alert_variant = "bg-blue-500";
      this.login_alert_msg = "Please wait! We are logging you in.";

      // Simulate login process (replace with your actual login logic)
      setTimeout(() => {
        // Example: check credentials
        if (this.email === "example@email.com" && this.password === "password123") {
          this.login_alert_variant = "bg-green-500";
          this.login_alert_msg = "Success! You are now logged in.";
        } else {
          this.login_alert_variant = "bg-red-500";
          this.login_alert_msg = "Failed! Invalid credentials.";
        }

        this.login_in_submission = false;
      }, 2000); // Simulating a login delay of 2 seconds (replace with actual login logic)
    },
  },
};
</script>
