<template>
    <div class="flex flex-col bg-gray-300 w-40">
        <div
            v-for="doc in sortedDocuments"
            :key="doc.id"
            :class="{
                'bg-gray-500 hover:bg-gray-500':
                    activeDocument && doc.id === activeDocument.id,
            }"
            class="flex hover:bg-gray-400 cursor-pointer"
        >
            <div
                class="flex-grow p-2"
                @click="$store.commit('activate', doc.id)"
            >
                {{ doc.name }}
            </div>
            <div
                class="p-2 hover:bg-red-500"
                v-if="activeDocument && doc.id === activeDocument.id"
                @click="$store.commit('delete', doc.id)"
            >
                x
            </div>
        </div>
        <div
            class="p-2 hover:bg-blue-400 text-center cursor-pointer"
            @click="$store.commit('new')"
        >
            +
        </div>
    </div>
</template>

<script>
import {mapGetters} from "vuex"

module.exports = {
    computed: {
        ...mapGetters(["sortedDocuments", "activeDocument"]),
    },
}
</script>
