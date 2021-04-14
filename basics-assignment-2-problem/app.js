const app = Vue.createApp({
    data() {
        return {
            output1: "",
            output2: "",
        };
    },
    methods: {
        showAlert() {
            alert("Button is pressed.");
        },
        inputText(event) {
            this.output1 = event.target.value;
        },
        confirmText(event) {
            this.output2 = event.target.value;
        },
    },
});

app.mount("#assignment");