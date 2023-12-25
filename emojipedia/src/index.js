import emojipedia from "./emojipedia";

const description = emojipedia.map((data) => {
  let arrayMeaning = data.meaning;
  return arrayMeaning.slice(0, 100);
});

console.log(description);
