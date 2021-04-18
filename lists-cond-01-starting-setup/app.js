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
            this.enteredVal = "";
        },
        removeGoal(index) {
            this.goals.splice(index, 1);
        },
    },
});

app.mount("#user-goals");