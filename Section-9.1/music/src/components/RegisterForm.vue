<template>
  <!-- Registration Form -->
  <div
    class="text-white text-center font-bold p-4 rounded mb-4"
    v-if="reg_show_alert"
    :class="reg_alert_variant"
  >
    {{ reg_alert_msg }}
  </div>
  <Vee-form :validation-schema="schema" :initial-values="userData">
    <!-- making required fields-->
    <!-- Name -->
    <div class="mb-3">
      <label class="inline-block mb-2">Name</label>
      <!-- using vee fields defined in validation.js -->
      <Vee-fields
        type="text"
        name="name"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Enter Name"
      />
      <ErrorMessage class="text-red-600" name="name" />
      <!-- error message -->
    </div>
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
    <!-- Age -->
    <div class="mb-3">
      <label class="inline-block mb-2">Age</label>
      <Vee-Fields
        type="number"
        name="age"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
      />
      <ErrorMessage class="text-red-600" name="age" />
      <!-- error message -->
    </div>
    <!-- Password -->
    <div class="mb-3">
      <label class="inline-block mb-2">Password</label>
      <Vee-Fields name="password" :bails="false" v-slot="{ field, errors }">
        <input
          type="password"
          class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
          placeholder="Password"
          v-bind="field"
        />
        <div class="text-red-600" v-for="error in errors" :key="error">{{ error }}</div>
      </Vee-Fields>
      <ErrorMessage class="text-red-600" name="password" />
      <!-- error message -->
    </div>
    <!-- Confirm Password -->
    <div class="mb-3">
      <label class="inline-block mb-2">Confirm Password</label>
      <Vee-Fields
        type="password"
        name="confirm_password"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
        placeholder="Confirm Password"
      />
      <ErrorMessage class="text-red-600" name="confirm_password" />
      <!-- error message -->
    </div>
    <!-- Country -->
    <div class="mb-3">
      <label class="inline-block mb-2">Country</label>
      <Vee-Fields
        as="select"
        name="country"
        class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
      >
        <option value="USA">USA</option>
        <option value="Mexico">Mexico</option>
        <option value="Germany">Germany</option>
        <option value="Antarctica">Antartica</option>
      </Vee-Fields>
      <ErrorMessage class="text-red-600" name="country" />
      <!-- error message -->
    </div>
    <!-- TOS -->
    <div class="mb-3 pl-6">
      <Vee-Fields
        type="checkbox"
        name="tos"
        value="1"
        class="w-4 h-4 float-left -ml-6 mt-1 rounded"
      />
      <label class="inline-block">Accept terms of service</label>
      <ErrorMessage class="text-red-600" name="tos" />
      <!-- error message -->
    </div>
    <button
      type="submit"
      class="block w-full bg-purple-600 text-white py-1.5 px-3 rounded transition hover:bg-purple-700"
      :disabled="reg_in_submission"
    >
      Submit
    </button>
  </Vee-form>
</template>

<script>
import firebase from '@/includes/firebase';


export default {
  name: "RegisterForm",
  data() {
    return {
      tab: 'login' /* default tab is login */,
      schema: {
        /* validation schema to add rules you need to pipe them | */
        name: 'required|min:3|max:100|alpha_spaces' /* name is required, min. characters, max characters, numbers aren't allowed */,
        email: 'required|min:3|max:100|email' /* email is required and so on... */,
        age: 'required|min_value:18|max_value:99' /* age is required, min value is 18, max value is 99 */,
        password: 'required|min:8|max:25|excluded:password',
        confirm_password:
          'passwords_mismatch:@password' /* password and confirm password are the same */,
        country:
          'required|country_excluded:Antarctica' /* country is required and Antarctica isn't allowed */,
        tos: 'tos'
      },
      userData: {
        country: 'USA'
      },
      reg_in_submission: false,
      reg_show_alert: false,
      reg_alert_variant: 'bg-blue-500',
      reg_alert_msg: 'Please wait! Your account is being created...',
    }
  },
  methods: {
    async register(values) {
      this.reg_show_alert = true;
      this.reg_in_submission = true;
      this.reg_alert_variant = "bg-blue-500";
      this.reg_alert_msg = "Please wait! Your account is being created...";

      let userCred = null;
      try {
        userCred = await firebase.auth().createUserWithEmailAndPassword(
          values.email,
          values.password,
        );
      } catch (error) {
        this.reg_in_submission = false;
        this.reg_alert_variant = 'bg-red-500';
        this.reg_alert_msg = 'Unexpected error occurred. Please try again later.';
        return;
      }

      this.reg_alert_variant = "bg-green-500";
      this.reg_alert_msg = "Success! Your account has been created.";
      console.log(userCred);
    },
  }
}
</script>
