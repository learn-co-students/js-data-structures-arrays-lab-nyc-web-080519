const drivers = ["Milo", "Otis", "Garfield"]

const destructivelyAppendDriver = (name) => drivers.push(name);

const destructivelyPrependDriver = (name) => drivers.unshift(name);

const destructivelyRemoveLastDriver = () => drivers.pop();

const destructivelyRemoveFirstDriver = () => drivers.shift();

const appendDriver = name => {
  return [...drivers, name];
};

function prependDriver(name) {
  return [name, ...drivers];
};

function removeLastDriver() {
  return drivers.slice(0, drivers.length-1);
}

function removeFirstDriver() {
  return drivers.slice(1)
}
