const app = Vue.createApp({
    data() {
        return {
            firstInputValue: '',
            secondInputValue: '',
            isParagraphVisible: true
        };
    },
    computed: {
        computedClasses() {
            return {
                user1: this.firstInputValue === 'user1',
                user2: this.firstInputValue === 'user2',
                visible: this.isParagraphVisible,
                hidden: !this.isParagraphVisible
            };
        }
    },
    methods: {
        handleButtonClick() {
            this.isParagraphVisible = !this.isParagraphVisible;
        }
    }
});

app.mount('#assignment');
