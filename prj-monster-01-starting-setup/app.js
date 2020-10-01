const getAttackValue = (min, max) => {
    return min + Math.floor(Math.random() * (max - min));
};

const app = Vue.createApp({
    data() {
        return {
            playerHealth: 100,
            monsterHealth: 100,
            currentRound: 1,
            winner: null
        };
    },
    computed: {
        monsterHealthWidth() {
            return `${this.monsterHealth > 0 ? this.monsterHealth : 0}%`;
        },
        playerHealthWidth() {
            return `${this.playerHealth > 0 ? this.playerHealth : 0}%`;
        },
        specialAttackAvailable() {
            return this.currentRound % 3 === 0;
        },
        allHealth() {
            console.log(this);
            return this.playerHealth, this.monsterHealth, Date.now();
        }
    },
    watch: {
        allHealth() {
            if (this.playerHealth <= 0 && this.monsterHealth <= 0) {
                this.winner = 'draw';
                return;
            }

            if (this.monsterHealth <= 0) {
                this.winner = 'player';
                return;
            }

            if (this.playerHealth <= 0) {
                this.winner = 'monster';
            }
        }
    },
    methods: {
        attackMonster() {
            this.currentRound += 1;

            const attackValue = getAttackValue(5, 12);

            this.monsterHealth -= attackValue;
            this.attackPlayer();
        },
        attackPlayer() {
            const attackValue = getAttackValue(8, 12);

            this.playerHealth -= attackValue;
        },
        specialAttackMonster() {
            this.currentRound += 1;

            this.monsterHealth -= getAttackValue(10, 25);
            this.attackPlayer();
        },
        heal() {
            this.currentRound += 1;

            this.playerHealth = Math.min(
                100,
                this.playerHealth + getAttackValue(10, 20)
            );

            this.attackPlayer();
        },
        surrender() {
            this.winner = 'monster';
        },
        startNewGame() {
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.currentRound = 1;
            this.winner = null;
        }
    }
});

app.mount('#game');
