const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: "",
            confirmedName: "",
            lastName: "",
            // fullName: "",
        };
    },
    watch: {
        counter(value) {
            if (value > 50) {
                that = this;
                setTimeout(() => {
                    that.counter = 0;
                }, 2000);
            }
        },
        // name(value) {
        //     this.fullName = value + " " + this.lastName;
        // },
        // lastName(value) {
        //     this.fullName = this.name + " " + value;
        // },
    },
    computed: {
        fullName() {
            console.log("running");
            if (this.name === "") {
                return "";
            }
            return this.name + " " + this.lastName;
        },
    },
    methods: {
        // outputFullName() {
        //     console.log("running");
        //     if (this.name === "") {
        //         return "";
        //     }
        //     return this.name + " Rahman";
        // },
        confirmInput() {
            this.confirmedName = this.name;
        },
        increment(num) {
            this.counter += num;
        },
        decrement(num) {
            this.counter -= num;
        },
        resetInput() {
            this.name = "";
        },
        setName(event) {
            this.name = event.target.value;
        },
        submitForm() {
            alert("Submitted!");
        },
    },
});

app.mount("#events");