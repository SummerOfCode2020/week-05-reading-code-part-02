module.exports = function nameThisFunction(value) {
    var pieces = value.split(' ');
    var newList = [];

    while (pieces.length) {
        newList.push(pieces.pop());
    }

    return newList.join(' ');
};
