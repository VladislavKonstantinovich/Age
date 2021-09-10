const name = prompt("Ваше ім'я");
const yob = prompt("Ваш рік народження");   //year of birth
const year = prompt("Який зараз рік?");

const age = year - yob;

alert(name + ", вам зараз " + age + " років");