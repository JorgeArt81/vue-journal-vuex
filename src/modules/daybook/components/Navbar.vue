<template>
    <nav class="navbar bg-primary">
        <div class="container-xxl">
            <a class="navbar-brand text-white">
                <img src="../../../assets/vue.svg" alt="Vue Logo" height="24"
                    class="d-inline-block align-text-top mx-2">
                {{ username }}
            </a>

            <div class="d-flex"></div>
            <button @click="onLogout" class="btn btn-outline-info"><i class="fa fa-sign-out-alt"></i></button>
        </div>
    </nav>
</template>

<script setup>
import { useRouter } from 'vue-router';
import useAuth from '@/modules/auth/composables/useAuth';

const router = useRouter()
const { username, logout } = useAuth()

const onLogout = () => {
    router.push({ name: 'login' })
    logout()
}
</script>