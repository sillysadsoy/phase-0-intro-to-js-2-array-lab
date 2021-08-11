const cats = ["Milo", "Otis", "Garfield"];
//DESTRUCTIVE-------------------------------------
function destructivelyAppendCat(name) {
    cats.push(name);
    return cats;
}

function destructivelyPrependCat(name) {
    cats.unshift(name);
    return cats;
}

function destructivelyRemoveLastCat() {
    cats.pop();
    return cats;
}

function destructivelyRemoveFirstCat() {
    cats.shift();
    return cats;
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