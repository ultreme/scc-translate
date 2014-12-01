var french_scrabble_attrs = {
    'a': 'JAMBON',
    'b': 'VOITURE',
    'c': 'CENDRILLER',
    'd': 'CACHOU',
    'e': 'OREILLER',
    'f': 'MALE',
    'g': 'FEMME',
    'h': 'ISTANBUL',
    'i': 'POITRINE',
    'j': 'DENT',
    'k': 'PEIGNOIR',
    'l': 'FRIGO',
    'm': 'TELEVISION',
    'n': 'CASQUE',
    'o': 'CHAMBRE',
    'p': 'GIRAFE',
    'q': 'UKULELE',
    'r': 'MIROIR',
    's': 'ASCENCEUR',
    't': 'ROBINET',
    'u': 'LAMPADAIRE',
    'v': 'WEBCAM',
    'w': 'ECRAN',
    'x': 'SOURIS',
    'y': 'CLAVIER',
    'z': 'MONOPOLY'
};
var scrabble_french_attrs = invert(french_scrabble_attrs);

function translate_french_scrabble(text) {
    var parts = text.split("");
    var newtext = '';
    for (var i in parts) {
        var ch = parts[i];
        if (ch in french_scrabble_attrs) {
            newtext += '[' + french_scrabble_attrs[ch] + ']';
        } else {
            newtext += ch;
        }
    }
    return newtext;
}

function translate_scrabble_french(text) {
    var replaceCallback = function(match) {
        match = match.substring(1, match.length - 1);
        if (match in scrabble_french_attrs) {
            return scrabble_french_attrs[match];
        } else {
            return match;
        }
    };
    return text.replace(/\[([^\]]*)\]/g, replaceCallback);
}

function translate_french_verlant(text) {
    return text.split("").reverse().join("");
}

function translate_verlant_french(text) {
    return text.split("").reverse().join("");
}
