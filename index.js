function selectRandomFrom(options) {
    var option = undefined;
    if (options && options.length >= 0) {
        option = options[randomFromRange(0, options.length)];
    }
    return option;
}

function randomFromRange(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = {
    selectRandomFrom: selectRandomFrom,
    randomFromRange: randomFromRange
}