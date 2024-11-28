const sortLetters = [..."abcdefghijklmnopqrstuvwxyz ABCDEFGHIJKLMNOPQRSTUVWXYZ"];

const routerOne = {
  sorted: [...sortLetters],
  random: [...'azmnhNlAi gubrojxfHspULcBqyVETGwYFOdJPIeQKXMkZWtvDCRS'],
};
const routerTwo = {
  sorted: [...sortLetters],
  random: [...'dQCLvequMXVFT IDUJEkzjrOimpWfRAyScxKHgNPtYZonlGBbawsh'],
};
const routerThree = {
  sorted: [...sortLetters],
  random: [...'UVSTXRYQONKMGHJLCIFPBAzEyxwZ WusDvroqnpmlkjhgifedcatb'],
};
const routerFour = {
  sorted: [...sortLetters],
  random: [...'HpFcrQZiTUPugbBKhDoeYSwOlGVENdqCxWnR tfLymAakIsJvXjzM'],
};
const routerFive = {
  sorted: [...sortLetters],
  random: [...'wnQNXCiYBesrSqFtojZLEfhUDKpRlvV OAdzxJcbyTkIMuaPGWHgm'],
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
