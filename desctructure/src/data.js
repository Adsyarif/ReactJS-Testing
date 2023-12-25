const animals = [
  { name: "cat", sound: "meow" },
  { name: "dog", sound: "woof" },
];

const useAnimal = (animal) => {
  return [
    animal.name,
    function () {
      console.log(animal.sound);
    },
  ];
};
