<template>
    <div class="flex flex-col bg-gray-300 w-40">
        <doc-switcher
            v-for="doc in docs"
            :key="doc.id"
            :doc="doc"
            :is-active="doc.id === active"
            @delete-document="$emit('delete-document', doc.id)"
            @activate-document="$emit('activate-document', doc.id)"
        ></doc-switcher>
        <div
            class="p-2 hover:bg-blue-400 text-center cursor-pointer"
            @click="$emit('new-document')"
        >
            +
        </div>
    </div>
</template>

<script>
import DocSwitcher from "./DocSwitcher.vue"

module.exports = {
    props: ["docs", "active"],
    components: {DocSwitcher},
}
</script>
