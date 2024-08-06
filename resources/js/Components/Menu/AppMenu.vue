<template>
    <div>
        <ul v-for="(item, index) in items" :key="index">
            <!-- {{ item }} -->
            <AppMenuSection :item="item" />
        </ul>
    </div>
</template>

<script setup>
const props = defineProps({
    items: {
        type: Array,
        default: () => []
    }
})
</script>
