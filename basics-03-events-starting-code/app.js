const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: "",
        };
    },
    methods: {
        increment(num) {
            this.counter += num;
        },
        decrement(num) {
            this.counter -= num;
        },
        setName(event, lastName) {
            this.name = event.target.value + " " + lastName;
        },
    },
});

app.mount("#events");