<template>
    <div id="app">
        <div class="flex h-screen">
            <sidebar
                @activate-document="id => (active = id)"
                @delete-document="deleteDocument"
                @new-document="newDocument"
                :docs="sortedDocuments"
                :active="active"
            ></sidebar>
            <textarea
                v-if="active !== null"
                class="p-4 w-full h-screen resize-none"
                v-model="activeContent"
            ></textarea>
        </div>
    </div>
</template>

<script>
import Sidebar from "./Sidebar.vue"

export default {
    components: {Sidebar},
    data() {
        return {
            documents: [
                {
                    id: 0,
                    name: "Recipes",
                    content:
                        "Gorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eis et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
                },
                {
                    id: 1,
                    name: "Ideas",
                    content:
                        "- Eat the rich\n- Eat the moon\n- Eat this document",
                },
                {
                    id: 2,
                    name: "Boring name",
                    content: "Boring content *shrug*",
                },
            ],
            active: 0,
        }
    },
    computed: {
        activeContent: {
            get() {
                return this.documents.find(d => d.id == this.active).content
            },
            set(val) {
                this.documents.find(d => d.id == this.active).content = val
            },
        },
        sortedDocuments() {
            return this.documents.sort((d1, d2) => {
                var name1 = d1.name.toUpperCase()
                var name2 = d2.name.toUpperCase()
                if (name1 < name2) {
                    return -1
                }
                if (name1 > name2) {
                    return 1
                }
                return 0
            })
        },
    },
    created() {
        this.active = this.documents[0].id
    },
    methods: {
        newDocument() {
            var name = prompt("Please enter a name for the new document:")
            var newDoc = {id: 42, name: name, content: ""} // FIXME
            this.active = newDoc.id
            this.documents.push(newDoc)
        },
        deleteDocument(id) {
            this.active = null
            this.documents = this.documents.filter(d => d.id != id)
        },
    },
}
</script>
