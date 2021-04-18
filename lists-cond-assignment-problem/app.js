const app = Vue.createApp({
    data() {
        return {
            inputVal: "",
            tasks: [],
            visible: true,
        };
    },
    computed: {
        buttonText() {
            if (this.visible) {
                return "Hide";
            } else {
                return "Show";
            }
        },
    },
    methods: {
        addTask() {
            this.tasks.push(this.inputVal);
            this.inputVal = "";
        },
        toggleVisibility() {
            this.visible = !this.visible;
        },
    },
});
app.mount("#assignment");