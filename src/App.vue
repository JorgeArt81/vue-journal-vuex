<script setup>
import useAuth from './modules/auth/composables/useAuth';

const { authStatus, checkAuthStatus } = useAuth()
checkAuthStatus()
</script>

<template>
  <div v-if="authStatus === 'authenticating'" class="alert alert-info" role="alert">
    {{ authStatus }}
  </div>
  <router-view v-else></router-view>
</template>
