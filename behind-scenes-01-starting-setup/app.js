const app = Vue.createApp({
    data() {
        return {
            currentUserInput: "",
            message: "Vue is great!",
        };
    },
    methods: {
        saveInput(event) {
            this.currentUserInput = event.target.value;
        },
        setText() {
            // this.message = this.currentUserInput;
            this.message = this.$refs.userText.value;
            // console.dir(this.$refs.userText);
        },
    },
    beforeCreate() {
        console.log("Before Create");
    },
    created() {
        console.log("created");
    },
    beforeMount() {
        console.log("Before Mount");
    },
    mounted() {
        console.log("Mounted");
    },
    beforeUpdate() {
        console.log("Before Update");
    },
    updated() {
        console.log("Updated");
    },
    beforeUnmount() {
        console.log("Before unmount");
    },
    unmounted() {
        console.log("Unmounted");
    },
});

app.mount("#app");

setTimeout(() => {
    app.unmount();
}, 3000);

const app2 = Vue.createApp({
    template: `<p>{{favouriteMeal}}</p>`,
    data() {
        return {
            favouriteMeal: "Pizza",
        };
    },
});

app2.mount("#app2");