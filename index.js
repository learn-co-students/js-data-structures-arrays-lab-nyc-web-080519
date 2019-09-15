const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
    drivers.push(name);
};

function destructivelyPrependDriver(name) {
    drivers.unshift(name);
};

function destructivelyRemoveLastDriver() {
    drivers.pop();
};

function destructivelyRemoveFirstDriver() {
    drivers.shift();
};

function appendDriver(name) {
    const newArr = [ ...drivers, name];
    return newArr;
};

function prependDriver(name) {
    const newArr = [name, ...drivers];
    return newArr;
};

function removeLastDriver() {
    const newArr = drivers.slice(0, -1);
    return newArr;
};

function removeFirstDriver() {
    const newArr = drivers.slice(1);
    return newArr;
}