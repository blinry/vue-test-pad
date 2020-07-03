<template>
    <div id="app">
        <div class="flex h-screen">
            <sidebar></sidebar>
            <textarea
                class="p-4 w-full h-screen resize-none font-mono"
                v-model="activeContent"
            ></textarea>
        </div>
    </div>
</template>

<script>
import Sidebar from "./Sidebar.vue"
import {mapState, mapGetters} from "vuex"

export default {
    components: {Sidebar},
    computed: {
        activeContent: {
            get() {
                if (this.activeDocument) {
                    return this.activeDocument.content
                } else {
                    return ""
                }
            },
            set(val) {
                if (this.activeDocument) {
                    this.$store.commit("update", val)
                }
            },
        },
        ...mapGetters(["activeDocument"]),
    },
}
</script>
