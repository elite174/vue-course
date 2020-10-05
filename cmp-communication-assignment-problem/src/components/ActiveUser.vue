<template>
    <div>
        <h2>{{ name }}</h2>
        <h3>{{ age }}</h3>
    </div>
</template>

<script>
export default {
    props: {
        name: {
            required: true,
            type: String
        },
        age: {
            required: true,
            type: Number
        }
    }
};
</script>
