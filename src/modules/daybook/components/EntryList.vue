<template>
    <div class="entry-list-container">
        <div class="px2 pt2">
            <input type="text" class="form-control" placeholder="Buscar entrada">
        </div>
        <div class="entry-scrollarea">
            <Entry v-for="item in 100" :key="item"></Entry>
        </div>
    </div>
</template>

<script>
import { defineAsyncComponent } from '@vue/runtime-core'
export default {
    components: {
        Entry: defineAsyncComponent(() => import('./Entry.vue'))
    }
}
</script>

<style lang="scss" scoped>
.entry-list-container {
    border-right: 1px solid #2c3e50;
    height: calc(100vh - 56px);
}

.entry-scrollarea {
    height: calc(100vh - 115px);
    overflow-y: scroll;
}
</style>