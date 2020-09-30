let timerId;

const app = Vue.createApp({
    data() {
        return {
            value: 0
        };
    },
    computed: {
        result() {
            if (this.value < 37) {
                return 'Not there yet!';
            }

            if (this.value === 37) {
                return this.value;
            }

            return 'Too much!';
        }
    },
    watch: {
        result() {
            clearTimeout(timerId);

            timerId = setTimeout(() => {
                console.log('reset!');

                this.value = 0;
            }, 5000);
        }
    },
    methods: {
        addNumber(number) {
            this.value += number;
        }
    }
});

app.mount('#assignment');
