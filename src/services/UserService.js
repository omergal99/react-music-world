var user = _randomName();

function getUser() {
    return Promise.resolve(user);
}

export default {
    getUser,
}

function _randomName(size = 4) {
    var text = "";
    var possibleUp = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    text += possibleUp.charAt(Math.floor(Math.random() * possibleUp.length));

    var possible = "aaabcdeeeefghiiiijklmnoooopqrstuuuuvwxyz";
    for (var i = 0; i < size - 1; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}