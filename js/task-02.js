const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listIngridients = document.querySelector('ul#ingredients');
const itemsIngridientsEl = [];
function createItemEl(arr) {
  arr.map((item) => {
    const listLi = document.createElement('li');
    listLi.classList.add('item');
    listLi.textContent = item;
    itemsIngridientsEl.push(listLi);
  }).join('');

  listIngridients.append(...itemsIngridientsEl);
}
createItemEl(ingredients);