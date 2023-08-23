const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientList = document.querySelector("#ingredients");

const items = ingredients.map(ingredient => {
  const listItem = document.createElement('li');
  listItem.classList.add('item');
  listItem.textContent = ingredient;
  return listItem;
});

console.log(items);
ingredientList.append(...items);