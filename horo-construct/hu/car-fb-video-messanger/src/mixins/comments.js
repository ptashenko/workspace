export default {
  data() {
    return {
      commentTitle: "hozzászólás",
      addComment: "Hozzászólás írása...",
      validationMessage:
        "Köszönjük a hozzászólásodat! <br> Az üzeneted moderálás alatt van.",
      comments: [
        {
          name: "Janka",
          text: "Egy olyan kérdéssel fordultam az asztrológushoz, amely a jövőre vonatkozik. Nem számítottam arra, hogy a jóslatok ennyire egyértelműek és érthetőek lesznek. Nemcsak a jövőről beszélt nekem, hanem a múltról is, valamint arról, ahogy most érzem magam. Nagyon boldog vagyok. Akit érdekel a jövő, annak mindenképpen ajánlom, hogy vegye igénybe ezt a szolgáltatást.",
          likes: 11,
          avatar: "1.jpg",
        },
        {
          name: "Krisztina",
          text: "Több asztrológust is felkerestem már... ez az oldal volt az utolsó reményem, és nem igazán számítottam eredményességre. De nem bántam meg, hogy úgy döntöttem, telefonálok. Az életem teljesen megváltozott! Köszönöm! Nagyon hálás vagyok!",
          likes: 20,
          avatar: "2.jpg",
        },
        {
          name: "Klaudia",
          text: "Nagyon szépen köszönöm az információkat a jövőmről! Nagyon le vagyok nyűgözve! Annyira pontosan leírtál mindent, és nagyon sok hasznos információt adtál! Köszönöm!",
          likes: 45,
          avatar: "3.jpg",
        },
        {
          name: "Amália",
          text: 'Köszönöm!!! Mennyit kellett keresnem, hogy megtaláljam ezt az oldalt!!! Végül "véletlenül" bukkantam rá az interneten. Köszönöm az univerzumnak!!!',
          likes: 33,
          avatar: "4.jpg",
        },
        {
          name: "Gabriella",
          text: "Minden nagyon lényegre törő volt. Olyan érzés, mintha az asztrológus ismerné az egész életemet. Annyira pontosak az információk! Nem találok szavakat. Nagyon örültem az igazságnak, és minden tanácsot megfogadok, amit kaptam. Mindenkinek csak ajánlani tudom! :-)",
          likes: 8,
          avatar: "5.jpg",
        },
        {
          name: "Alíz",
          text: "Köszönöm szépen a segítségedet! Nagyon elégedett vagyok, minden kérdésemre választ kaptam!",
          likes: 20,
          avatar: "6.jpg",
        },
        {
          name: "Olga",
          avatar: "7.jpg",
          text: "Ez hihetetlen! Úgy álltak össze az események, mint egy kirakós darabjai, és az egyik jóslat már valóra is vált!",
          likes: 20,
        },
        {
          name: "Márk",
          avatar: "8.jpg",
          text: "Hát, nekem azt mondták, hogy minden rendben lesz. Habár ezt magamtól is tudtam, az előrejelzésektől függetlenül.",
          likes: 16,
        },
        {
          name: "Mária",
          avatar: "9.jpg",
          text: "Az olyan ember, mint te, igazi áldás. Köszönöm neked, hogy meg tudtam védeni a gyermekemet!",
          likes: 27,
        },
        {
          name: "Anasztázia",
          avatar: "10.jpg",
          text: "Szerintem ez az egész csak hazugság. Vagy élvhajhászás – legalábbis azok számára, akiknek egy-két dolog bejön.",
          likes: 31,
        },
      ],
    };
  },
};
