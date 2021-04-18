const getRandomValue = (max, min) =>
    Math.floor(Math.random() * (max - min)) + min;

const app = Vue.createApp({
    data() {
        return {
            playerhealth: 100,
            monsterhealth: 100,
            currentRound: 0,
        };
    },
    computed: {
        monsterBarStyles() {
            return { width: this.monsterhealth + "%" };
        },
        playerBarStyles() {
            return { width: this.playerhealth + "%" };
        },
        mayUseSpecialAttack() {
            return this.currentRound % 3 !== 0;
        },
    },
    methods: {
        attackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(12, 5);
            this.monsterhealth -= attackValue;
            this.attackPlayer();
        },
        attackPlayer() {
            const attackValue = getRandomValue(12, 8);
            this.playerhealth -= attackValue;
        },
        specialAttackMonster() {
            this.currentRound++;
            const attackValue = getRandomValue(25, 10);
            this.monsterhealth -= attackValue;
            this.attackPlayer();
        },
        healPlayer() {
            this.currentRound++;
            const healValue = getRandomValue(20, 8);
            if (this.playerhealth + healValue > 100) {
                this.playerhealth = 100;
            } else {
                this.playerhealth += healValue;
            }
            this.attackPlayer();
        },
    },
});

app.mount("#game");