import { zodiakList } from '@/text/zodiakList';
export default {
  data() {
    return {
      zodiaksList: zodiakList,
      currentZodiak: zodiakList[9],
    };
  },
  methods: {
    calculateZodiak(date) {
      this.zodiaksList.forEach((item) => {
        if (date <= 120 || date >= 1223) {
          this.currentZodiak = this.zodiaksList[6];
        } else if (item.date[0] <= date && date <= item.date[1]) {
          this.currentZodiak = item;
        }
      });
    },
  },
};
