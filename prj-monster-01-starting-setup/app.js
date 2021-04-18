const getRandomValue = (max, min) =>
    Math.floor(Math.random() * (max - min)) + min;

const app = Vue.createApp({
    data() {
        return {
            playerhealth: 100,
            monsterhealth: 100,
            currentRound: 0,
            winner: null,
            LogMessages: [],
        };
    },
    computed: {
        monsterBarStyles() {
            if (this.monsterhealth < 0) {
                return { width: "0%" };
            }
            return { width: this.monsterhealth + "%" };
        },
        playerBarStyles() {
            if (this.playerhealth < 0) {
                return { width: "0%" };
            }
            return { width: this.playerhealth + "%" };
        },
        mayUseSpecialAttack() {
            return this.currentRound % 3 !== 0;
        },
    },
    watch: {
        playerhealth(value) {
            if (value <= 0 && this.monsterhealth <= 0) {
                // draw
                this.winner = "draw";
            } else if (value <= 0) {
                // player lost
                this.winner = "monster";
            }
        },
        monsterhealth(value) {
            if (value <= 0 && this.playerhealth <= 0) {
                //draw
                this.winner = "draw";
            } else if (value <= 0) {
                //monster lost
                this.winner = "player";
            }
        },
    },
    methods: {
        startGame() {
            this.playerhealth = 100;
            this.monsterhealth = 100;
            this.currentRound = 0;
            this.winner = null;
            this.LogMessages = [];
        },
        attackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(12, 5);
            this.monsterhealth -= attackValue;
            this.attackPlayer();
            this.addLogMessage("player", "attack", attackValue);
            this.attackPlayer();
        },
        attackPlayer() {
            const attackValue = getRandomValue(12, 8);
            this.playerhealth -= attackValue;
            this.addLogMessage("monster", "attack", attackValue);
        },
        specialAttackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(25, 10);
            this.monsterhealth -= attackValue;
            this.addLogMessage("player", "attack", attackValue);
        },
        healPlayer() {
            this.currentRound++;
            const healValue = getRandomValue(20, 8);
            if (this.playerhealth + healValue > 100) {
                this.playerhealth = 100;
            } else {
                this.playerhealth += healValue;
            }
            this.addLogMessage("player", "heal", healValue);
            this.attackPlayer();
        },
        surrender() {
            this.winner = "monster";
        },
        addLogMessage(who, what, value) {
            this.LogMessages.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value,
            });
        },
    },
});

app.mount("#game");