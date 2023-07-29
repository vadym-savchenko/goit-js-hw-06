const nameCategory = document.querySelectorAll('.item');
console.dir(`Number of categories: ${nameCategory.length}`);

nameCategory.forEach(function (list) {
    console.dir(`Category: ${list.firstElementChild.textContent}`);
    console.dir(`Elements: ${list.lastElementChild.children.length}`);
});