const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push(name);
}

function destructivelyPrependDriver(name) {
  drivers.unshift(name);
}

function  destructivelyRemoveLastDriver() {
  drivers.pop();
}

function destructivelyRemoveFirstDriver() {
  drivers.shift();
}

function appendDriver(name) {
  const new_name = [...drivers, name];
  return new_name;
}

function prependDriver(name) {
  const new_name = [name, ...drivers];
  return new_name;
}

function removeLastDriver() {
  const new_arr = drivers.slice(0, -1);
  return new_arr;
}

function removeFirstDriver() {
  const new_arr = drivers.slice(1);
  return new_arr;
}