<template>
    <div
        :class="{'bg-gray-500 hover:bg-gray-500': isActive}"
        class="flex hover:bg-gray-400 cursor-pointer"
    >
        <div class="flex-grow p-2" @click="$emit('activate-document', doc.id)">
            {{ doc.name }}
        </div>
        <div
            class="p-2 hover:bg-red-500"
            @click="$emit('delete-document', doc.id)"
            v-if="isActive"
        >
            x
        </div>
    </div>
</template>

<script>
module.exports = {
    props: ["doc", "isActive"],
}
</script>
