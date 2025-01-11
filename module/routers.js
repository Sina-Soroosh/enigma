const sortLetters = [
  ..." 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyzابتثجحخدذرزسشصضطظعغفقلمنهوپچژکگی",
];

const routerOne = {
  sorted: [...sortLetters],
  random: [
    ..."bVflahzxMSyPkiWXcشwjoمGmp7گTتY4سqn5ذtوZپdچUصظحجیveژDE0اCدKsنgطrع1uRAQ23Iغر6خض NفبBقکFJهH9ثOLل8ز",
  ],
};
const routerTwo = {
  sorted: [...sortLetters],
  random: [
    ..."VcdbailnkefvgphjsmRDJMxwo rqtyBuPQzOAHSICNLEFGWXYZر01پTح92UKج5سم7ادف3نب46تخگذ8ثچکضطزشژصغظقلهعوی",
  ],
};
const routerThree = {
  sorted: [...sortLetters],
  random: [
    ..."xvوکیKMDپگغچweHرUpصثعقفJز74ا6IOlqهCBuدafGESX iWحنظQذت2جNشjLtطsykVخTmبb8rPلY9hA50RمgسoF1cdnضژ3Zz",
  ],
};
const routerFour = {
  sorted: [...sortLetters],
  random: [
    ..."tiDsSzgUfyedoFcچحخhMظYKwEض3jlBجupxCHbrTJOVILqابپ NkسقشGPهWلتQn8vaصm2R9طمZXفن0ز4گرعد67کغوذژی51ثA",
  ],
};
const routerFive = {
  sorted: [...sortLetters],
  random: [
    ..."حendcسVEphاWزiHپw3رF4Xqصjعbx7جtچRظشضم ZB6JنCkT0GخaلYvsrfقyگD2ژهoOثط1غgذlM5NفuکSQIبmیدzL89UتPAوK",
  ],
};

const reflector = [...sortLetters];

const routers = [
  { ...routerOne },
  { ...routerTwo },
  { ...routerThree },
  { ...routerFour },
  { ...routerFive },
];

export { routers, reflector, sortLetters };
