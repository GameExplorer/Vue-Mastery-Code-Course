<script>
import Heading from './components/Header.vue'
import Auth from './components/Auth.vue'
import { mapWritableState } from 'pinia'
import useUserStore from '@/stores/user'
import { auth } from '@/includes/firebase'
import AppPlayer from './components/Player.vue'

export default {
  name: 'App',
  components: {
    Heading,
    Auth,
    AppPlayer
  },
  computed: {
    ...mapWritableState(useUserStore, ['userLoggedIn'])
  },
  created() {
    if (auth.currentUser) {
      this.userLoggedIn = true
    }
  }
}
</script>

<template>
  <Heading />
  <router-view v-slot="{ Component }">
    <component :is="Component"></component>
  </router-view>
  <AppPlayer />
  <Auth />
</template>

<style></style>
