<template>
    <h1>HOME</h1>
    <button @click="goToDaybook" class="btn btn-primary">goToDaybook</button>
</template>

<script>
export default {
    methods: {
        goToDaybook() {
            this.$router.push({ name: 'no-entry' })
        }
    }
}
</script>