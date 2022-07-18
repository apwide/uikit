<template>
    <div>
        <h2>Elevation 1</h2>
        <KitCard :elevation="1">
            Hello world
        </KitCard>

        <h2>Elevation 2</h2>
        <KitCard :elevation="2">
            Hello world
        </KitCard>

        <h2>Elevation 3</h2>
        <KitCard :elevation="3">
            Hello world
        </KitCard>
    </div>
</template>
<script>
    import KitCard from '../../src/components/Card/KitCard.vue';

    export default {
        name: 'KitCard.story',
        components: {
            KitCard
        }
    };
</script>
