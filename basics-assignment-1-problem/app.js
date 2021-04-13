const app = Vue.createApp({
    data() {
        return {
            name: "Masrur",
            age: 18,
            imageURL: "https://cdn.pixabay.com/photo/2015/04/23/17/41/javascript-736400_1280.png",
        };
    },
    methods: {
        futureAge() {
            return this.age + 5;
        },
    },
});

app.mount("#assignment");