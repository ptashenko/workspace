import text from "@/text/text.json";

export default {
  data() {
    return {
      text: text,
      start: text.start,
      test: text.test,
      result: text.result,
      commentsBlock: text.commentsBlock,
      price: text.price
    };
  }
};
