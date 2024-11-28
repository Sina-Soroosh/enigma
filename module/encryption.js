import { sortLetters, reflector, routers } from "./routers.js";
let firstRouter = { ...routers[0] };
let secondRouter = { ...routers[1] };
let thirdRouter = { ...routers[2] };
let rotationFirstRouter = 0;
let rotationSecondRouter = 0;
let rotationThirdRouter = 0;

const notValidError = () => {
  alert("Not valid!");

  throw new Error("Not Valid !!");
};

const encryptionLetterHandler = (letter, router) => {
  const indexOnRouter = router.sorted.findIndex(
    (letterEnglish) => letter === letterEnglish
  );

  if (indexOnRouter < 0) {
    notValidError();
  }

  const randomLetter = router.random[indexOnRouter];

  if (!randomLetter) {
    notValidError();
  }

  return randomLetter;
};

const encryptionLetterHandlerAfterReflector = (letter, router) => {
  const indexOnRouter = router.random.findIndex(
    (letterEnglish) => letter === letterEnglish
  );

  if (indexOnRouter < 0) {
    notValidError();
  }

  const randomLetter = router.sorted[indexOnRouter];

  if (!randomLetter) {
    notValidError();
  }

  return randomLetter;
};

const reflectorHandler = (letter) => {
  const indexOnReflector = reflector.findIndex(
    (letterEnglish) => letter === letterEnglish
  );

  if (indexOnReflector < 0) {
    notValidError();
  }

  const reverseLetter = reflector[reflector.length - 1 - indexOnReflector];

  return reverseLetter;
};

const rotationRouter = (rotation) => {
  const validRotation = rotation % 26;

  if (validRotation === 0) return [...sortLetters];

  let newLetters = [...sortLetters];

  const spliceLetters = newLetters.splice(0, validRotation);
  newLetters.push(...spliceLetters);

  return newLetters;
};

const generateEncryption = (text) => {
  const letters = [...text];
  let encryption = "";

  letters.map((letter) => {
    const isValidLetter = sortLetters.includes(letter);

    if (!isValidLetter) {
      notValidError();
    }

    const encryptionOnFirstRouter = encryptionLetterHandler(letter, {
      ...firstRouter,
    });
    const encryptionOnSecondRouter = encryptionLetterHandler(
      encryptionOnFirstRouter,
      { ...secondRouter }
    );
    const encryptionOnThirdRouter = encryptionLetterHandler(
      encryptionOnSecondRouter,
      { ...thirdRouter }
    );

    const reverseLetter = reflectorHandler(encryptionOnThirdRouter);

    const afterReflectorOnThirdRouter = encryptionLetterHandlerAfterReflector(
      reverseLetter,
      { ...thirdRouter }
    );
    const afterReflectorOnSecondRouter = encryptionLetterHandlerAfterReflector(
      afterReflectorOnThirdRouter,
      { ...secondRouter }
    );
    const encryptionLetter = encryptionLetterHandlerAfterReflector(
      afterReflectorOnSecondRouter,
      { ...firstRouter }
    );

    encryption += encryptionLetter;

    rotationFirstRouter++;
    firstRouter.sorted = rotationRouter(rotationFirstRouter);

    if (rotationFirstRouter % 26 === 0 && rotationFirstRouter !== 0) {
      rotationSecondRouter++;
      secondRouter.sorted = rotationRouter(rotationSecondRouter);
    }

    if (rotationSecondRouter % 26 === 0 && rotationSecondRouter !== 0) {
      rotationThirdRouter++;
      thirdRouter.sorted = rotationRouter(rotationThirdRouter);
    }
  });

  return encryption;
};

const setRouters = (first, second, third) => {
  firstRouter = { ...routers[first] };
  secondRouter = { ...routers[second] };
  thirdRouter = { ...routers[third] };
};

const setRotation = (first, second, third) => {
  rotationFirstRouter = first;
  rotationSecondRouter = second;
  rotationThirdRouter = third;
};

export { setRouters, setRotation };
export default generateEncryption;
