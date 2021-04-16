const app = Vue.createApp({
    data() {
        return {
            counter: 0,
        };
    },
    watch: {
        result() {
            that = this;
            setTimeout(() => {
                that.counter = 0;
            }, 5000);
        },
    },
    computed: {
        result() {
            if (this.counter > 37) {
                return "Too much!";
            } else if (this.counter < 37) {
                return "Not there yet";
            } else {
                return 37;
            }
        },
    },
    methods: {
        addNum(num) {
            this.counter += num;
        },
    },
});

app.mount("#assignment");