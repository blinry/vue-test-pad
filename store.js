import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

function uuidv4() {
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (
        c,
    ) {
        var r = (Math.random() * 16) | 0,
            v = c == "x" ? r : (r & 0x3) | 0x8
        return v.toString(16)
    })
}

export default new Vuex.Store({
    state: {
        documents: [
            {
                id: uuidv4(),
                name: "Recipes",
                content:
                    "Gorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eis et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
            },
            {
                id: uuidv4(),
                name: "Ideas",
                content: "- Eat the rich\n- Eat the moon\n- Eat this document",
            },
            {
                id: uuidv4(),
                name: "Boring name",
                content: "Boring content *shrug*",
            },
        ],
        active: 0,
    },
    getters: {
        activeDocument: (state) => {
            return state.documents.find((d) => d.id == state.active)
        },
        sortedDocuments: (state) => {
            return state.documents.sort((d1, d2) => {
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
    mutations: {
        new(state) {
            var name = prompt("Please enter a name for the new document:")
            var newDoc = {id: uuidv4(), name: name, content: ""}
            state.active = newDoc.id
            state.documents.push(newDoc)
        },
        activate(state, id) {
            state.active = id
        },
        delete(state, id) {
            if (confirm("Do you really want to delete this document?")) {
                if (state.active == id) {
                    state.active = null
                }
                state.documents = state.documents.filter((d) => d.id != id)
            }
        },
        update(state, content) {
            state.documents.find((d) => d.id == state.active).content = content
        },
    },
})
