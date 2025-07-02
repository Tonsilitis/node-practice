import promptSync from "prompt-sync";
const prompt = promptSync();

type FoodType = {
  label: string;
  categ: string;
};

let foods: FoodType[] = [
  {
    label: "apple",
    categ: "fruit",
  },
  {
    label: "banana",
    categ: "fruit",
  },
  {
    label: "carrot",
    categ: "veggies",
  },
  {
    label: "pork",
    categ: "meat",
  },
  {
    label: "milk",
    categ: "dairy",
  },
];

const arrayObject = () => {
  try {
    //map
    let labelList = foods.map((food) => food.label);
    console.table(`\n -- Table of Label (map) -- `);
    console.table(labelList);

    //foreach
    console.log(`\n -- Food List (forEach)--`);
    foods.forEach((food, index) => {
      console.log(`${index + 1}.`, food.label);
    });

    //filter
    console.log("\n");
    let filter: string = prompt(` Filter Category :`);
    console.log(`\n -- Filter for ${filter} (filter)--`);
    let filterFoods = foods.filter(
      (food) => food.categ == filter.toLowerCase()
    );
    console.log(filterFoods);

    //find
    console.log("\n");
    let find: string = prompt(`Search for: `);
    console.log(`\n -- Search for ${find} (find) --`);
    let findFoods = foods.find((food) => food.label == find.toLowerCase());
    console.log(findFoods);
  } catch (error) {
    console.error(`An unexpected error`, error);
  }
};

const addFoods = () => {
  try {
    console.log(`\n -- Add New Foods -- `);
    let newLabel: string = prompt(`Label: `);
    let newCateg: string = prompt(`Category: `);
    let newFoods = {
      label: newLabel,
      categ: newCateg,
    };
    foods.push(newFoods);
    console.table(foods);
  } catch (error) {
    console.error(`An unexpected error`, error);
  }
};

const menu = () => {
  console.log(`\n -- Food Menu --`);
  console.log(` 1. View Foods`);
  console.log(` 2. Add Foods`);
  console.log(` 3. Exit`);
  let option: string | number = prompt(` -- Choose an Option --`);
  option = parseInt(option);
  switch (option) {
    case 1:
      arrayObject();
      menu();
    case 2:
      addFoods();
      menu();
    case 3:
      process.exit();
    default:
      console.log(` Invalid Option! `);
  }
};

menu();
