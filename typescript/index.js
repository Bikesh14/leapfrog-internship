// export function getRandomString()
function getRandomString(length) {
    var CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var randomString = "";
    for (var i = 0; i < length; i++) {
        var randomIndex = Math.floor(Math.random() * CHARACTERS.length);
        randomString += CHARACTERS.charAt(randomIndex);
    }
    return randomString;
}
