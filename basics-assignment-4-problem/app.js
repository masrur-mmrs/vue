const app = Vue.createApp({
    data() {
        return {
            user: "",
            visible: true,
            color: "",
        };
    },
    computed: {
        pClass() {
            if (this.user === "user1") {
                return { user1: true };
            } else if (this.user === "user2") {
                return { user2: true };
            }
        },
    },
    methods: {
        userID(event) {
            this.user = event.target.value;
        },
        toggleVisibility() {
            this.visible = !this.visible;
        },
        colorSwitch(event) {
            this.color = event.target.value;
        },
    },
});

app.mount("#assignment");