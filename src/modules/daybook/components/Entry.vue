<template>
    <div class="entry-container mb-3 pointer p-2" @click="$router.push({ name: 'entry', params: { id: 1 } })">
        <!-- Titulo -->
        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">15</span>
            <span class="mx-1 fs-5">Julio</span>
            <span class="mx-2 fw-light">2021, jueves</span>
        </div>
        <!-- Descripcion -->
        <div class="entry-description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta accusantium, porro eveniet voluptates unde
            id
            quidem, itaque perspiciatis illo numquam fugiat vitae. Odit maiores distinctio dolores consequatur tempora
            iure
            illo?
        </div>
    </div>
</template>

<style lang="scss" scoped>
.entry-container {
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease;

    &:hover {
        background-color: lighten($color: gray, $amount: 45);
    }

    .entry-description {
        font-size: 12px;
    }
}
</style>