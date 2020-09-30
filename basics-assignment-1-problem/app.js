const app = Vue.createApp({
    data() {
        return {
            name: 'Vlad',
            age: 25,
            imageUrl:
                'https://image.shutterstock.com/image-vector/sample-stamp-grunge-texture-vector-260nw-1389188336.jpg'
        };
    },
    methods: {
        getRandomNumber() {
            return Math.random();
        }
    }
});

app.mount('#assignment');
