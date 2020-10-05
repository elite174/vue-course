<template>
    <div>
        <div>Enter name:</div>
        <input
            type="text"
            @input="$emit('change-name', $event.target.value)"
            :value="name"
        />
        <div>Enter age:</div>
        <input
            type="number"
            @input="$emit('change-age', $event.target.value)"
            :value="age"
        />
    </div>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        }
    },
    emits: ['change-name', 'change-age']
};
</script>
