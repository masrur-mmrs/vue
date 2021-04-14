const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: "",
            confirmedName: "",
        };
    },
    methods: {
        confirmInput() {
            this.confirmedName = this.name;
        },
        increment(num) {
            this.counter += num;
        },
        decrement(num) {
            this.counter -= num;
        },
        setName(event, lastName) {
            this.name = event.target.value + " " + lastName;
        },
        submitForm() {
            alert("Submitted!");
        },
    },
});

app.mount("#events");