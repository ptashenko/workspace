export default {
    data() {
        return {
            calls: this.randomInteger(1500, 1800),
            viewers: this.randomInteger(2000, 2500)
        }
    },
    methods: {
        randomInteger(min, max) {
            var rand = min - 0.5 + Math.random() * (max - min + 1);
            rand = Math.round(rand);
            return rand;
        }
    }
}