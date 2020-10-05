<template>
    <div>
        <active-user :name="name" :age="age"></active-user>
        <user-form
            :name="name"
            :age="age"
            @change-name="changeName"
            @change-age="changeAge"
        ></user-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            name: '',
            age: 0
        };
    },
    methods: {
        changeName(name) {
            this.name = name;
        },
        changeAge(age) {
            this.age = Number(age);
        }
    }
};
</script>
