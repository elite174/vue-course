const app = Vue.createApp({
    data() {
        return {
            firstInputValue: '',
            secondInputValue: ''
        };
    },
    methods: {
        showAlert() {
            alert('Some random text');
        },
        handleKeyDown(e) {
            this.firstInputValue = e.target.value;
        },
        handleConfirmedKeyDown(e) {
            this.secondInputValue = e.target.value;
        }
    }
});

app.mount('#assignment');
