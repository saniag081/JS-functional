const compose = (...functions) => data =>
  functions.reduceRight((value, func) => func(value), data)

function attrsToString( obj = {}) {
  const keys = Object.keys(obj);
  const attrs = [];
  for (let i = 0; i < keys.length; i++){
    let attr = keys[i];
    attrs.push(`${attr}=${obj[attr]}`);
  }
  const string = attrs.join('');
  return string;
}

  const tag = (t) => content => `<${t}>${content}</${t}>`

let $btn = document.querySelector('#btn');
let description = $('#description');
let calories = $('#calories');
let carbs = $('#carbs');
let protein = $('#protein');

let list = [
]

description.keypress(() => {
  description.removeClass('is-invalid');
})
calories.keypress(() => {
  calories.removeClass('is-invalid');
})
carbs.keypress(() => {
  carbs.removeClass('is-invalid');
})
protein.keypress(() => {
  protein.removeClass('is-invalid');
})

$btn.addEventListener('click', validateInputs);
function validateInputs() {
  description.val() ? '' : description.addClass('is-invalid');
  calories.val() ? '' : calories.addClass('is-invalid');
  carbs.val() ? '' : carbs.addClass('is-invalid');
  protein.val() ? '' : protein.addClass('is-invalid');
  if (description.val() &&
    calories.val() &&
    carbs.val() &&
    protein.val()) add()
}

function add() {
  const newItem = {
    description: description.val(),
    calories: parseInt(calories.val()),
    carbs: parseInt(carbs.val())
  }
  list.push(newItem);
  cleanInputs();
  console.log(list);
}

function cleanInputs() {
  description.val('');
  calories.val('');
  carbs.val('');
}