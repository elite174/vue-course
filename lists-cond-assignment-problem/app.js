const app = Vue.createApp({
    data() {
        return {
            tasks: [],
            listVisible: true,
            inputValue: ''
        };
    },
    methods: {
        toggleListVisibility() {
            this.listVisible = !this.listVisible;
        },
        addTask() {
            this.tasks.push(this.inputValue);
            this.inputValue = '';
        }
    }
});

app.mount('#assignment');
