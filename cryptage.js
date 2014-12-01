var invert = function (obj) {
    var new_obj = {};
    for (var prop in obj) {
        if(obj.hasOwnProperty(prop)) {
            new_obj[obj[prop]] = prop;
        }
    }
    return new_obj;
};
var yougo_french_attrs = {
    'a': '¡',
    'b': '¢',
    'c': '£',
    'd': '¤',
    'e': '¥',
    'f': '¦',
    'g': '§',
    'h': '¨',
    'i': 'ª',
    'j': '«',
    'k': '¬',
    'l': '®',
    'm': '¯',
    'n': '°',
    'o': '©',
    'p': '±',
    'q': '²',
    'r': '³',
    's': '´',
    't': 'µ',
    'u': '¶',
    'v': '·',
    'w': '¸',
    'x': '¹',
    'y': 'º',
    'z': '»',
    'A': '¼',
    'B': '½',
    'C': '¾',
    'D': '¿',
    'E': 'À',
    'F': 'Á',
    'G': 'Â',
    'H': 'Ã',
    'I': 'Ä',
    'J': 'Å',
    'K': 'Æ',
    'L': 'Ç',
    'M': 'È',
    'N': 'É',
    'O': 'Ê',
    'P': 'Ë',
    'Q': 'Ì',
    'R': 'Í',
    'S': 'Î',
    'T': 'Ï',
    'U': 'Ð',
    'V': 'Ñ',
    'W': 'Ò',
    'X': 'Ó',
    'Y': 'Ô',
    'Z': 'Õ',
    '0': 'Ö',
    '1': '×',
    '2': 'Ø',
    '3': 'Ù',
    '4': 'Ú',
    '5': 'Û',
    '6': 'Ü',
    '7': 'Ý',
    '8': 'Þ',
    '9': 'ß'
};
var french_yougo_attrs = invert(yougo_french_attrs);


function translate_french_yougo(text) {
    var newtext = '';
    for (var i = 0; i < text.length; i++) {
        var ch = text[i];
        if (ch in yougo_french_attrs) {
            newtext += yougo_french_attrs[ch];
        } else {
            newtext += ch;
        }
    }
    return newtext;
}
function translate_yougo_french(text) {
    var newtext = '';
    for (var i = 0; i < text.length; i++) {
        var ch = text[i];
        if (ch in french_yougo_attrs) {
            newtext += french_yougo_attrs[ch];
        } else {
            newtext += ch;
        }
    }
    return newtext;
}

function cryptage() {
    var from = 'french';
    var to = 'yougo';
    var func, text;
    var cestparti = function() {
        from = $('#langfrom input:checked').val();
        to = $('#langto input:checked').val();
        if (from == to) {
            if (from == 'french') {
                $('#langto2').attr('checked', 'checked');
                to = 'yougo';
            } else {
                $('#langto1').attr('checked', 'checked');
                to = 'french';
            }
        }
        $('#langto input[disabled]').prop('disabled', false);
        $('#langto input[value='+from+']').attr('disabled', 'disabled');


        var text = $('textarea#source').val();
        if (from != 'french') {
            func = 'translate_' + from + '_french';
            text = window[func](text);
        }

        if (to != 'french') {
            func = 'translate_french_' + to;
            text = window[func](text);
        }
        $('textarea#dest').val(text);
    };
    //$('#cryptage').click(cestparti);
    $('button').click(cestparti);
    $('input').click(cestparti).change(cestparti);
    $('textarea').focus(cestparti).blur(cestparti);
    $('#cryptage').text('CRYPTAGE').prop('disabled', false);
    var latest = null;
    function cron() {
        var newone = $('#source').val() + $('#langto1').val();
        if (latest != newone) {
            cestparti();
            latest = newone;
        }
    }
    setInterval(cron, 500);
}
$(document).ready(function() {cryptage();});
