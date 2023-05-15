export default {
  data() {
    return {
      c: 0,
      j: 0,
      lineColor: "greenOrange",
    };
  },
  methods: {
    flow(state) {
      switch (this.qidx) {
        case 0:
          this.lineColor = "greenOrange";
          break;
        case 1:
          this.lineColor = "orangeRed";
          break;
        case 2:
          this.lineColor = "redReverse";
          break;
        case 3:
          this.lineColor = "orangeGrey";
          break;
      }
      if (state) {
        let l = setInterval(() => {
          this.c++;
          if (this.c === 3) {
            this.done = false;
          }
          if (this.c === 4) {
            clearInterval(l);
            window.scrollTo(0, 0);
            this.disabledBtn = true;
            this.c = 0;
          }
        }, 350);
      } else {
        let b = setInterval(() => {
          this.j++;
          if (this.j === 2) {
            this.done = true;
          }
          if (this.j === 3) {
            if (this.qidx + 1 === this.questions.length) {
              this.$emit("switchScreen", "loading");
            }
            this.qidx++;
          }
          if (this.j === 4) {
            clearInterval(b);
            this.j = 0;
            this.flow(true);
          }
        }, 350);
      }
    },
  },
};
