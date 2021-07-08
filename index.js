const cats = ["Milo", "Otis", "Garfield"];
//DESTRUCTIVE-------------------------------------
function destructivelyAppendCat(name) {
    cats.push(name);
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}
//NONDESTRUCTIVE-------------------------------------
function appendCat(name) {
    const appendCat = [...cats, name];
    return appendCat;
}

function prependCat(name) {
    const prependCat = [name, ...cats];
    return prependCat;
}

function removeLastCat() {
    return cats.slice(0, cats.length-1);
}

function removeFirstCat() {
    return cats.slice(1);
}