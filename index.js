// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(n) {
    drivers.push(n);
}

function destructivelyPrependDriver(n) {
    drivers.unshift(n);
}

function destructivelyRemoveLastDriver() {
    drivers.pop();
}

function destructivelyRemoveFirstDriver() {
    drivers.shift();
}

function appendDriver(n) {
    return [...drivers, n];
}

function prependDriver(n) {
    return [n, ...drivers];
}

function removeFirstDriver() {
    return drivers.slice(1);
}

function removeLastDriver() {
    return drivers.slice(0, drivers.length - 1);
}