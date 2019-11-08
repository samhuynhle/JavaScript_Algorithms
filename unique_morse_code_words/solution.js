var morseMap = {
    'a': ".-",
    'b': "-...",
    'c': "-.-.",
    'd': "-..",
    'e': ".",
    'f': "..-.",
    'g': "--.",
    'h': "....",
    'i': "..",
    'j': ".---",
    'k': "-.-",
    'l': ".-..",
    'm': "--",
    'n': "-.",
    'o': "---",
    'p': ".--.",
    'q': "--.-",
    'r': ".-.",
    's': "...",
    't': "-",
    'u': "..-",
    'v': "...-",
    'w': ".--",
    'x': "-..-",
    'y': "-.--",
    'z': "--.."
};

var uniqueMorseRepresentations = function(words) {
    const set1 = new Set();
    for(var word of words){
        var replace = '';
        for(var char of word){
            replace += morseMap[char];
        }
        if(!set1.has(replace)){
            set1.add(replace);
        }
    }
    return set1.size;
};