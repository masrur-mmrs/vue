const app = Vue.createApp({
    data() {
        return {
            enteredVal: "",
            goals: [],
        };
    },
    methods: {
        addGoal() {
            this.goals.push(this.enteredVal);
        },
    },
});

app.mount("#user-goals");